((Metro, $) => {
    "use strict";

    let RemoteDatasetDefaultConfig = {
        caption: "",
        url: "",
        urlSearch: "",
        method: "GET",
        limit: 10,
        offset: 0,
        sort: "",

        keyLimit: "",
        keyOffset: "",
        keyTotal: "",
        keyData: "",
        keySort: "",
        keyOrder: "",
        keySearch: "q",

        shortPagination: false,
        rows: 10,
        rowsSteps: "10,25,50,100",
        sortRules: "",

        showServiceBlock: true,
        quickSearch: true,
        selectOrder: true,
        selectCount: true,
        showMore: true,
        showPagination: true,

        params: null,

        sortLabel: "",
        rowsLabel: "",
        searchLabel: "",

        clsBody: "",
        clsPagination: "",
        clsSearchBlock: "",
        clsOrderBlock: "",
        clsRowsCountBlock: "",

        onBeforeLoad: (f) => f,
        onLoad: (f) => f,
        onDrawEntry: Metro.noop,
        onDatasetCreate: Metro.noop,
    };

    Metro.remoteDatasetSetup = (options) => {
        RemoteDatasetDefaultConfig = $.extend({}, RemoteDatasetDefaultConfig, options);
    };

    if (typeof globalThis.metroRemoteDatasetSetup !== "undefined") {
        Metro.remoteDatasetSetup(globalThis.metroRemoteDatasetSetup);
    }

    Metro.Component("remote-dataset", {
        init: function (options, elem) {
            this._super(elem, options, RemoteDatasetDefaultConfig, {
                // define instance vars here
                data: null,
                total: 0,
                params: {},
            });
            return this;
        },

        _create: function () {
            const o = this.options;

            this.offset = o.offset;
            this.rowSteps = o.rowsSteps.toArray(",", "int");
            this.limit = +o.rows;
            this.url = o.url;
            this.search = "";
            const [field, order] = o.sort.toArray(":");
            this.sortField = field;
            this.sortOrder = order;
            this.sortRules = o.sortRules
                .toArray(",")
                .filter((f) => f)
                .map((rule) => rule.toArray(":"));

            const params = Metro.utils.isObject(o.params);
            if (params) {
                this.params = { ...params };
            }

            this._createStructure();
            this._createEvents();
            this._loadData().then(() => {});
            this._fireEvent("dataset-create");
        },

        _createStructure: function () {
            const element = this.element;
            const o = this.options;
            const entries = $("<div>").addClass("dataset-entry");

            element.addClass("remote-dataset");
            element.append(entries);

            entries.html(`
                <div class="service-block ${o.showServiceBlock ? "" : "d-none"}">
                    <div class="search-block ${o.clsSearchBlock} ${o.quickSearch ? "" : "d-none"}">
                        <input name="search" type="text" data-role="input" 
                            data-prepend="${o.searchLabel || this.strings.label_search}" 
                            data-search-button="true" 
                            />
                    </div>
                   
                    <div class="order-block ${o.clsOrderBlock} ${this.sortRules.length === 0 || o.selectOrder === false ? "d-none" : ""}">
                        <select name="sort-order" data-role="select" data-filter="false" data-prepend="${o.sortLabel || this.strings.label_sorting}">
                            ${this.sortRules
                                .map(
                                    (rule) => `
										<option value="${rule[0]}:${rule[1]}" 
												${rule[0] === this.sortField && rule[1] === this.sortOrder ? "selected" : ""}
												data-icon="${rule[3] ? rule[3] : ""}"
										>
											${rule[2]}
										</option>
									`,
                                )
                                .join("")}
                        </select>
                    </div>
                   
                    <div class="count-block ${o.clsRowsCountBlock} ${o.selectCount ? "" : "d-none"}">
                        <select name="rows-count" data-role="select" data-prepend="${o.rowsLabel || this.strings.label_rows_count}" data-filter="false">
                            ${this.rowSteps
                                .map(
                                    (step) => `
										<option value="${step}" ${+step === +this.limit ? "selected" : ""}>
											${step}
										</option>
									`,
                                )
                                .join("")}
                        </select>
                    </div>
                </div>
                ${o.caption ? `<div class="dataset-caption">${o.caption}</div>` : ""}
                <div class="dataset-body"></div>
            `);
            this.body = entries.find(".dataset-body").addClass(o.clsBody);

            this.loadMore = $("<div>").addClass("dataset-load-more");
            this.loadMore
                .html(`
                <button class="button large cycle link load-more-button">
                    <span class="icon">⟳</span>
                    ${this.strings.label_load_more}
                </button>
            `)
                .appendTo(element);

            if (o.showMore === false) {
                this.loadMore.addClass("d-none");
            }

            this.pagination = $("<div>").addClass("dataset-pagination");
            if (o.showPagination === false) {
                this.pagination.addClass("d-none");
            }
            element.append(this.pagination);
        },

        _createEvents: function () {
            const that = this;
            const element = this.element;
            const o = this.options;

            element.on("click", ".page-link", function () {
                const parent = $(this).parent();
                if (parent.hasClass("service")) {
                    if (parent.hasClass("prev-page")) {
                        that.offset -= that.limit;
                        if (that.offset < 0) {
                            that.offset = 0;
                        }
                    } else {
                        that.offset += that.limit;
                    }
                    that._loadData().then(() => {});
                    return;
                }
                that.offset = $(this).data("page") * that.limit - that.limit;
                that._loadData().then(() => {});
            });

            const searchFn = Hooks.useDebounce(() => {
                const val = element.find("input[name=search]").val().trim();
                if (val === "") {
                    this.search = "";
                    this.url = o.url;
                    this._loadData().then(() => {});
                    return;
                }
                if (val.length < 3) {
                    return;
                }
                this.addParam(o.keySearch, val);
                if (o.urlSearch) {
                    this.url = o.urlSearch;
                }
                this._loadData().then(() => {});
            }, 300);

            element.on(Metro.events.inputchange, "input[name=search]", searchFn);

            element.on("change", "select[name=rows-count]", function () {
                that.limit = +$(this).val();
                that.offset = 0;
                that._loadData().then(() => {});
            });

            element.on("change", "select[name=sort-order]", function () {
                const [field, order] = $(this).val().split(":");
                that.url = o.url;
                that.sortField = field;
                that.sortOrder = order;
                that.offset = 0;
                that._loadData().then(() => {});
            });

            element.on("click", ".load-more-button", () => {
                that.offset += that.limit;
                that._loadData(true).then(() => {});
            });
        },

        _createEntries: function (append = false) {
            const o = this.options;

            if (!this.data) {
                return;
            }

            const usePagination = Metro.utils.isValue(this.data[o.keyTotal]);

            this.entries = this.data[o.keyData];
            this.total = o.keyTotal ? this.data[o.keyTotal] : this.entries.length;

            if (append === false) this.body.clear();

            this.entries.forEach((entry, index) => {
                Metro.utils.exec(o.onDrawEntry, [entry, index, this.body[0]], this);
            });

            if (usePagination && !o.shortPagination) {
                Metro.pagination({
                    length: this.total,
                    rows: this.limit,
                    current: this.offset === 0 ? 1 : Math.round(this.offset / this.limit) + 1,
                    target: this.pagination,
                    clsPagination: o.clsPagination,
                });
            } else {
                this.pagination.html(`
                    <div class="short-pagination">
                        <div class="button service prev-page"><a href="javascript:void(0)" class="page-link">${this.strings.label_prev}</a></div>
                        <div class="button service next-page"><a href="javascript:void(0)" class="page-link">${this.strings.label_next}</a></div>
                    </div>
                `);
            }
        },

        _loadData: async function (append = false) {
            const o = this.options;

            if (!this.url) {
                return;
            }

            let url = `${this.url}?`;

            if (o.keyLimit) {
                url += `${o.keyLimit}=${this.limit}&`;
            }
            if (o.keyOffset) {
                url += `${o.keyOffset}=${this.offset}`;
            }

            if (this.sortField) {
                if (o.keySort) {
                    url += `&${o.keySort}=${this.sortField}`;
                }
                if (o.keyOrder) {
                    url += `&${o.keyOrder}=${this.sortOrder}`;
                }
            }

            for (const key in this.params) {
                if (this.params.hasOwnProperty(key)) {
                    url += `&${key}=${encodeURIComponent(this.params[key])}`;
                }
            }

            url = o.onBeforeLoad(url, this);

            const response = await fetch(url, { method: o.method });
            if (response.ok === false) {
                return;
            }
            const responseData = await response.json();
            this.data = Metro.utils.exec(o.onLoad, [responseData], this);
            this._createEntries(append);
        },

        addParam: function (key, value) {
            if (this.params === null) {
                this.params = {};
            }
            this.params[key] = value;
            return this;
        },

        addParams: function (params = {}) {
            if (this.params === null) {
                this.params = {};
            }
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    this.params[key] = params[key];
                }
            }
            return this;
        },

        clearParams: function () {
            this.params = {};
            return this;
        },

        load: function (append = false) {
            if (this.url === "") {
                return;
            }

            this._loadData(append).then(() => {});
        },

        changeAttribute: (attr, newValue) => {},

        destroy: function () {
            this.element.remove();
        },
    });
})(Metro, Dom);
