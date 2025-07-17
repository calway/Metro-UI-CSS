((Metro, $) => {
    // biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
    "use strict";

    let SelectDefaultConfig = {
        id: "",
        label: "",
        size: "normal",
        selectDeferred: 0,
        clearButton: false,
        clearButtonIcon: "❌",
        usePlaceholder: false,
        placeholder: "",
        addEmptyValue: false,
        emptyValue: "",
        duration: 0,
        prepend: "",
        append: "",
        filterPlaceholder: "",
        filter: false,
        dropHeight: 200,
        dropWidth: null,
        dropFullSize: false,
        openMode: "auto",
        showGroupName: false,
        shortTag: true, // tag with name max width 120px

        source: null,
        sourceMethod: "GET",
        sourceType: "json",
        filterSource: null,
        filterThreshold: 500,

        clsSelect: "",
        clsSelectInput: "",
        clsPrepend: "",
        clsAppend: "",
        clsOption: "",
        clsOptionActive: "",
        clsOptionGroup: "",
        clsDropList: "",
        clsDropContainer: "",
        clsSelectedItem: "",
        clsSelectedItemAction: "",
        clsLabel: "",
        clsGroupName: "",
        clsFilterInput: "",

        onClear: Metro.noop,
        onChange: Metro.noop,
        onUp: Metro.noop,
        onDrop: Metro.noop,
        onItemSelect: Metro.noop,
        onItemDeselect: Metro.noop,
        onSelectCreate: Metro.noop,
        onData: (f) => f,
    };

    Metro.selectSetup = (options) => {
        SelectDefaultConfig = $.extend({}, SelectDefaultConfig, options);
    };

    if (typeof globalThis.metroSelectSetup !== "undefined") {
        Metro.selectSetup(globalThis.metroSelectSetup);
    }

    Metro.Component("select", {
        init: function (options, elem) {
            this._super(elem, options, SelectDefaultConfig, {
                list: null,
                placeholder: null,
                observer: null,
            });

            return this;
        },

        _create: function () {
            const element = this.element;

            this._createSelect();
            this._createEvents();

            this._fireEvent("select-create", {
                element: element,
            });
        },

        _setPlaceholder: function () {
            const element = this.element;
            const o = this.options;
            const input = element.siblings(".select-input");
            if (
                o.usePlaceholder === true &&
                (!Metro.utils.isValue(element.val()) || `${element.val()}` === `${o.emptyValue}`)
            ) {
                input.html(o.placeholder || this.strings.label_select_more);
            }
        },

        _addTag: function (val, data) {
            const element = this.element;
            const o = this.options;
            let tagSize;
            const container = element.closest(".select");
            const html = `<span class='title'>${val}</span>`;

            const tag = $("<div>")
                .addClass("tag")
                .addClass(o.shortTag ? "short-tag" : "")
                .addClass(o.clsSelectedItem)
                .html(html)
                .data("option", data);
            $("<span>")
                .addClass("action unselect-option")
                .addClass(o.clsSelectedItemAction)
                .html("&times;")
                .appendTo(tag);

            if (container.hasClass("large")) {
                tagSize = "large";
            } else if (container.hasClass("small")) {
                tagSize = "small";
            } else if (container.hasClass("medium")) {
                tagSize = "medium";
            }

            tag.addClass(tagSize);

            return tag;
        },

        _addOption: function (item, parent, input, multiple, group) {
            const option = $(item);
            let l;
            let a;
            const element = this.element;
            const o = this.options;
            let html = Metro.utils.isValue(option.attr("data-template"))
                ? option.attr("data-template").replace("$1", item.text)
                : item.text;
            const displayValue = option.attr("data-display");

            l = $("<li>")
                .addClass(o.clsOption)
                .data("option", item)
                .attr("data-text", item.text)
                .attr("data-value", item.value ? item.value : "");
            a = $("<a>").html(html);

            const optionIcon = option.attr("data-icon");
            if (optionIcon) {
                a.prepend($("<span>").addClass("icon").html(optionIcon));
            }

            if (displayValue) {
                l.attr("data-display", displayValue);
                html = displayValue;
            }

            l.addClass(item.className);

            l.data("group", group);

            if (option.is(":disabled")) {
                l.addClass("disabled");
            }

            if (option.is(":selected")) {
                let g = "";

                if (o.showGroupName && group) {
                    g = `&nbsp;<span class='selected-item__group-name ${o.clsGroupName}'>${group}</span>`;
                }

                if (multiple) {
                    l.addClass("d-none");
                    input.append(this._addTag(a.html() + g, l));
                } else {
                    html = a.html() + g;
                    element.val(item.value);
                    input.html(html);
                    element.fire("change", {
                        val: item.value,
                    });
                    l.addClass("active");
                }
            }

            l.append(a).appendTo(parent);
        },

        _addOptionGroup: function (item, parent, input, multiple) {
            const that = this;
            const o = this.options;
            const group = $(item);

            $("<li>").html(item.label).addClass("group-title").addClass(o.clsOptionGroup).appendTo(parent);

            $.each(group.children(), function () {
                that._addOption(this, parent, input, multiple, item.label);
            });
        },

        _createOptions: function () {
            const that = this;
            const element = this.element;
            const o = this.options;
            const select = element.parent();
            const list = select.find("ul").empty();
            const selected = element.find("option[selected]").length > 0;
            const multiple = element[0].multiple;
            const input = element.siblings(".select-input");

            element.siblings(".select-input").empty();

            if (o.addEmptyValue === true) {
                element.prepend(
                    $(`<option ${!selected ? "selected" : ""} value='${o.emptyValue}' class='d-none'></option>`),
                );
            }

            $.each(element.children(), function () {
                if (this.tagName === "OPTION") {
                    that._addOption(this, list, input, multiple, null);
                } else if (this.tagName === "OPTGROUP") {
                    that._addOptionGroup(this, list, input, multiple);
                }
            });
        },

        _createSelect: async function () {
            const element = this.element;
            const o = this.options;

            const container = element.wrap("<label>");
            const multiple = element[0].multiple;
            const select_id = Hooks.useId(container[0]);
            const buttons = $("<div>").addClass("button-group");
            let drop_container;
            let drop_container_input;
            const checkboxID = Hooks.useId("select-focus-trigger");
            const checkbox = $("<input type='checkbox'>").addClass("select-focus-trigger").attr("id", checkboxID);

            this.placeholder = $("<span>").addClass("placeholder").html(o.placeholder);

            container.attr("id", o.id ? o.id : select_id).attr("for", checkboxID);
            container[0].className = Metro.utils.classNames(
                element[0].className,
                `input-${o.size}`,
                "select",
                o.clsSelect,
            );

            const dropdown_toggle = $("<span>").addClass("dropdown-toggle");
            dropdown_toggle.appendTo(container);

            if (multiple) {
                container.addClass("multiple");
            }

            buttons.appendTo(container);
            checkbox.appendTo(container);

            const input = $("<div>")
                .addClass("select-input")
                .addClass(o.clsSelectInput)
                .attr("name", `__${select_id}__`);
            drop_container = $("<div>").addClass("drop-container").addClass(o.clsDropContainer);

            if (o.dropFullSize === false) {
                if (o.dropWidth) {
                    drop_container.css({
                        width: +o.dropWidth,
                    });
                }
            } else {
                container.addClass("drop-full-size");
            }

            drop_container_input = $("<div>").appendTo(drop_container);
            const list = $("<ul>").addClass("option-list").addClass(o.clsDropList).css({
                "max-height": o.dropHeight,
            });
            const filter_input = $(
                `<input type='text' data-role='input' data-clear-button-icon="${o.clearButtonIcon}">`,
            )
                .attr("placeholder", o.filterPlaceholder || `${this.strings.label_filter}...`)
                .appendTo(drop_container_input);
            filter_input.addClass(o.clsFilterInput);

            container.append(input);
            container.append(drop_container);

            drop_container.append(drop_container_input);

            if (o.filter !== true) {
                drop_container_input.hide();
            }

            drop_container.append(list);

            if (o.source) {
                await this.fetch(o.source, {
                    method: o.sourceMethod || "GET",
                    headers: {
                        "Content-Type": `application/${o.sourceType || "json"}`,
                    },
                });
            }

            this._createOptions();

            this._setPlaceholder();

            this._createDroppable(drop_container);

            this.list = list;

            if (o.clearButton === true && !element[0].readOnly) {
                const clearButton = $("<button>")
                    .addClass("button input-clear-button")
                    .addClass(o.clsClearButton)
                    .attr("tabindex", -1)
                    .attr("type", "button")
                    .html(o.clearButtonIcon);
                clearButton.appendTo(buttons);
            } else {
                buttons.addClass("d-none");
            }

            if (o.prepend !== "" && !multiple) {
                const prepend = $("<div>").html(o.prepend);
                prepend.addClass("prepend").addClass(o.clsPrepend).appendTo(container);
            }

            if (o.append !== "" && !multiple) {
                const append = $("<div>").html(o.append);
                append.addClass("append").addClass(o.clsAppend).appendTo(container);
            }

            if (element.attr("dir") === "rtl") {
                container.addClass("rtl").attr("dir", "rtl");
            }

            if (o.label) {
                const label = $("<label>")
                    .addClass("label-for-input")
                    .addClass(o.clsLabel)
                    .html(o.label)
                    .insertBefore(container);
                if (element.attr("id")) {
                    label.attr("for", element.attr("id"));
                } else {
                    label.attr("for", checkboxID);
                }
                if (element.attr("dir") === "rtl") {
                    label.addClass("rtl");
                }
            }

            if (element.is(":disabled")) {
                this.disable();
            } else {
                this.enable();
            }

            this.observer = new MutationObserver(this._updateSelect.bind(this));
            this.observer.observe(element[0], {
                childList: true,
                subtree: true,
            });
        },

        _createDroppable: function (drop_container) {
            const o = this.options;
            const filter_input = drop_container.find("input");
            const container = this.element.closest(".select");
            const dropdown_toggle = drop_container.siblings(".dropdown-caret");
            const list = drop_container.find("ul");

            Metro.makePlugin(drop_container, "dropdown", {
                dropFilter: ".select",
                duration: o.duration,
                toggleElement: [container],
                openMode: o.openMode,
                onDrop: () => {
                    let target;
                    dropdown_toggle.addClass("active-toggle");
                    const dropped = $(".select .drop-container");
                    $.each(dropped, function () {
                        const drop = $(this);
                        if (drop.is(drop_container)) {
                            return;
                        }
                        const dataDrop = Metro.getPlugin(drop, "dropdown");
                        if (dataDrop?.close) {
                            dataDrop.close();
                        }
                    });

                    filter_input.val("").trigger(Metro.events.keyup); //.focus();

                    target = list.find("li.active").length > 0 ? $(list.find("li.active")[0]) : undefined;
                    if (target !== undefined) {
                        list[0].scrollTop = target.position().top - (list.height() - target.height()) / 2;
                    }

                    this._fireEvent("drop", {
                        list: list[0],
                    });
                },
                onUp: () => {
                    dropdown_toggle.removeClass("active-toggle");

                    this._fireEvent("up", {
                        list: list[0],
                    });
                },
            });
        },

        _updateSelect: function (mutation) {
            for (const record of mutation) {
                if (record.type === "childList") {
                    if (record.addedNodes.length || record.removedNodes.length) {
                        this._createOptions();
                    }
                }
            }
        },

        _createEvents: function () {
            const that = this;
            const element = this.element;
            const o = this.options;
            const container = element.closest(".select");
            const drop_container = container.find(".drop-container");
            const input = element.siblings(".select-input");
            const filter_input = drop_container.find("input");
            const list = drop_container.find("ul");
            const clearButton = container.find(".input-clear-button");
            const checkbox = container.find(".select-focus-trigger");

            checkbox.on("focus", () => {
                container.addClass("focused");
            });

            checkbox.on("blur", () => {
                container.removeClass("focused");
            });

            clearButton.on(Metro.events.click, (e) => {
                element.val(o.emptyValue);
                if (element[0].multiple) {
                    list.find("li").removeClass("d-none");
                }

                input.clear();
                that._setPlaceholder();

                e.preventDefault();
                e.stopPropagation();

                that._fireEvent("clear");
                that._fireEvent("change", {
                    selected: that.getSelected(),
                });
            });

            element.on(Metro.events.change, () => {
                that._setPlaceholder();
            });

            container.on(Metro.events.click, () => {
                $(".focused").removeClass("focused");
                container.addClass("focused");
            });

            input.on(Metro.events.click, () => {
                $(".focused").removeClass("focused");
                container.addClass("focused");
            });

            list.on(Metro.events.click, "li", function (e) {
                if ($(this).hasClass("group-title")) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                const leaf = $(this);
                const displayValue = leaf.attr("data-display");
                const val = leaf.data("value");
                const group = leaf.data("group");
                let html = displayValue ? displayValue : leaf.children("a").html();
                const option = leaf.data("option");
                const options = element.find("option");

                if (o.showGroupName && group) {
                    html += `&nbsp;<span class='selected-item__group-name ${o.clsGroupName}'>${group}</span>`;
                }

                if (element[0].multiple) {
                    leaf.addClass("d-none");
                    input.append(that._addTag(html, leaf));
                } else {
                    list.find("li.active").removeClass("active").removeClass(o.clsOptionActive);
                    leaf.addClass("active").addClass(o.clsOptionActive);
                    input.html(html);
                    Metro.getPlugin(drop_container, "dropdown").close();
                }

                $.each(options, function () {
                    if (this === option) {
                        this.selected = true;
                    }
                });

                that._fireEvent("item-select", {
                    val: val,
                    option: option,
                    leaf: leaf[0],
                });

                const selected = that.getSelected();
                that._fireEvent("change", {
                    selected: selected,
                });
            });

            input.on("click", ".tag .action", function (e) {
                const item = $(this).closest(".tag");
                const leaf = item.data("option");
                const option = leaf.data("option");

                leaf.removeClass("d-none");
                $.each(element.find("option"), function () {
                    if (this === option) {
                        this.selected = false;
                    }
                });
                item.remove();

                that._fireEvent("item-deselect", {
                    option: option,
                });

                const selected = that.getSelected();
                that._fireEvent("change", {
                    selected: selected,
                });

                e.preventDefault();
                e.stopPropagation();
            });

            const filter_input_change = Hooks.useDebounce(async (e) => {
                const o = this.options;
                const list = this.list;
                const filter = e.target.value.toLowerCase();
                const filterSource = `${o.filterSource}${filter}`;

                if (o.filterSource) {
                    await this.fetch(
                        filterSource,
                        {
                            method: o.sourceMethod || "GET",
                            headers: {
                                "Content-Type": `application/${o.sourceType || "json"}`,
                            },
                        },
                        true,
                    );
                } else {
                    const li = list.find("li");
                    let i;
                    let a;
                    let t;
                    for (i = 0; i < li.length; i++) {
                        if ($(li[i]).hasClass("group-title")) continue;
                        a = li[i].getElementsByTagName("a")[0];
                        t = a.innerHTML || a.innerText;

                        if (t.toLowerCase().includes(filter)) {
                            li[i].style.display = "";
                        } else {
                            li[i].style.display = "none";
                        }
                    }
                }
            }, o.filterThreshold);

            filter_input.on(Metro.events.keyup, filter_input_change.bind(this));

            filter_input.on(Metro.events.click, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });

            drop_container.on(Metro.events.click, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        },

        _clearOptions: function () {
            this.element.clear();
            this.list.clear();
        },

        disable: function () {
            this.element.data("disabled", true);
            this.element.closest(".select").addClass("disabled");
        },

        enable: function () {
            this.element.data("disabled", false);
            this.element.closest(".select").removeClass("disabled");
        },

        toggleState: function () {
            if (this.elem.disabled) {
                this.disable();
            } else {
                this.enable();
            }
        },

        reset: function (to_default) {
            const element = this.element;
            const options = element.find("option");
            const select = element.closest(".select");

            $.each(options, function () {
                this.selected = !Metro.utils.isNull(to_default) ? this.defaultSelected : false;
            });

            this.list.find("li").remove();
            select.find(".select-input").html("");

            this._createOptions();

            const selected = this.getSelected();
            this._fireEvent("change", {
                selected: selected,
            });
        },

        getSelected: function () {
            const element = this.element;
            const result = [];

            element.find("option").each(function () {
                if (this.selected) result.push(this.value);
            });

            return result;
        },

        val: function (val) {
            const that = this;
            const element = this.element;
            const o = this.options;
            const input = element.siblings(".select-input");
            const options = element.find("option");
            const list_items = this.list.find("li");
            const result = [];
            const multiple = !!element.attr("multiple");
            let option;
            let i;
            let html;
            let list_item;
            let option_value;
            let group;

            if (Metro.utils.isNull(val)) {
                $.each(options, function () {
                    if (this.selected) result.push(this.value);
                });
                return multiple ? result : result[0];
            }

            $.each(options, function () {
                this.selected = false;
            });
            list_items.removeClass("active").removeClass(o.clsOptionActive);
            input.html("");

            const _val = Array.isArray(val) ? val : [val];

            $.each(_val, function () {
                for (i = 0; i < options.length; i++) {
                    option = options[i];
                    html = Metro.utils.isValue(option.getAttribute("data-template"))
                        ? option.getAttribute("data-template").replace("$1", option.text)
                        : option.text;
                    if (`${option.value}` === `${this}`) {
                        option.selected = true;
                        break;
                    }
                }

                for (i = 0; i < list_items.length; i++) {
                    list_item = $(list_items[i]);
                    group = list_item.data("group");
                    option_value = list_item.attr("data-value");
                    if (`${option_value}` === `${this}`) {
                        if (o.showGroupName && group) {
                            html += `&nbsp;<span class='selected-item__group-name'>${group}</span>`;
                        }

                        if (element[0].multiple) {
                            list_item.addClass("d-none");
                            input.append(that._addTag(html, list_item));
                        } else {
                            list_item.addClass("active").addClass(o.clsOptionActive);
                            input.html(html);
                        }
                        break;
                    }
                }
            });

            const selected = this.getSelected();
            this._fireEvent("change", {
                selected: selected,
            });
        },

        options: function (op, selected, delimiter) {
            return this.data(op, selected, delimiter);
        },

        data: function (op, selected, delimiter) {
            const element = this.element;
            let option_group;
            let _selected;
            const _delimiter = delimiter || ",";

            if (typeof selected === "string") {
                _selected = selected.toArray(_delimiter).map((v) => (Number.isNaN(v) ? v : +v));
            } else if (Array.isArray(selected)) {
                _selected = selected.slice().map((v) => (Number.isNaN(v) ? v : +v));
            } else {
                _selected = [];
            }

            this.observer.disconnect();
            element.empty();

            if (typeof op === "string") {
                element.html(op);
            } else if (Metro.utils.isObject2(op)) {
                $.each(op, (key, val) => {
                    if (Metro.utils.isObject2(val)) {
                        option_group = $("<optgroup label=''>").attr("label", key).appendTo(element);
                        $.each(val, (key2, val2) => {
                            const op = $("<option>").attr("value", key2).text(val2).appendTo(option_group);
                            if (_selected.indexOf(+key2) > -1) {
                                op.prop("selected", true);
                            }
                        });
                    } else {
                        const op = $("<option>").attr("value", key).text(val).appendTo(element);
                        if (_selected.indexOf(key) > -1) {
                            op.prop("selected", true);
                        }
                    }
                });
            }

            this._createOptions();
            this.observer.observe(element[0], {
                childList: true,
                subtree: true,
            });

            return this;
        },

        addOption: function (val, title, selected) {
            const element = this.element;
            const option = $("<option>")
                .attr("value", val)
                .text(title ? title : val);

            element.append(option);

            if (selected) {
                if (element[0].multiple) {
                    // nothing
                } else {
                    element.find("option").prop("selected", false);
                }
                option.prop("selected", true);
            }

            // this._createOptions();

            return this;
        },

        addOptions: function (values) {
            const that = this;

            if (!values) {
                return this;
            }

            this.observer.disconnect();

            if (Array.isArray(values)) {
                $.each(values, function () {
                    if (Metro.utils.isObject2(this)) {
                        that.addOption(this.val, this.title, this.selected);
                    } else {
                        that.addOption(this);
                    }
                });
            } else if (Metro.utils.isObject2(values)) {
                $.each(values, (key, val) => {
                    that.addOption(key, val);
                });
            }

            this._createOptions();

            this.observer.observe(element[0], {
                childList: true,
                subtree: true,
            });

            return this;
        },

        removeOption: function (val) {
            const element = this.element;
            const options = element.find("option");

            options.each(function () {
                const $el = $(this);
                if (`${$el.attr("value")}` === "${val}") {
                    $el.remove();
                }
            });

            this._createOptions();

            return this;
        },

        removeOptions: function (values) {
            const element = this.element;
            const options = element.find("option");

            if (!values || !Array.isArray(values)) {
                return this;
            }

            options.each(function () {
                const $el = $(this);
                const val = $el.attr("value");

                if (values.indexOf(val) > -1) {
                    $el.remove();
                }
            });

            this._createOptions();

            return this;
        },

        fetch: async function (source, options, clearOptions = false) {
            const element = this.element;
            const o = this.options;

            const _options = Object.assign(
                {
                    method: "GET",
                    headers: {
                        "Content-Type": `application/${o.sourceType}`,
                    },
                },
                options,
            );

            const result = await fetch(source, _options);

            if (result.ok === false) {
                return;
            }

            if (clearOptions) {
                this._clearOptions();
            }

            let data = o.sourceType === "json" ? await result.json() : await result.text();
            data = Metro.utils.exec(o.onData, [data], element[0]);

            $.each(data, function () {
                const option = $("<option>").attr("value", this.value).html(this.text);
                if (this.icon) {
                    option.attr("data-icon", this.icon);
                }
                option.appendTo(element);
            });
        },

        changeAttribute: function (attributeName) {
            if (attributeName === "disabled") {
                this.toggleState();
            }
        },

        destroy: function () {
            const element = this.element;
            const o = this.options;
            const container = element.closest(".select");
            const drop_container = container.find(".drop-container");
            const input = element.siblings(".select-input");
            const filter_input = drop_container.find("input");
            const list = drop_container.find("ul");
            const clearButton = container.find(".input-clear-button");

            container.off(Metro.events.click);
            container.off(Metro.events.click, ".input-clear-button");
            input.off(Metro.events.click);
            filter_input.off(Metro.events.blur);
            filter_input.off(Metro.events.focus);
            list.off(Metro.events.click, "li");
            filter_input.off(Metro.events.keyup);
            drop_container.off(Metro.events.click);
            clearButton.off(Metro.events.click);

            drop_container.data("dropdown").destroy();

            if (o.label) {
                container.prev("label").remove();
            }

            container.remove();
        },
    });

    $(document).on(
        Metro.events.click,
        () => {
            $(".select").removeClass("focused");
        },
        { ns: "blur-select-elements" },
    );
})(Metro, Dom);
