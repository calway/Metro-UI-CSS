((Metro, $) => {
    // biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
    "use strict";

    let TabsDefaultConfig = {
        tabsDeferred: 0,
        expand: false,
        expandPoint: null,
        type: "default", // default, text, group, pills, n8n
        updateUri: false,
        position: "top", // top, bottom, left, right
        align: "left", // left, center, right
        link: "",

        clsTabs: "",
        clsTabsList: "",
        clsTabsListItem: "",
        clsTabsListItemActive: "",

        onTab: Metro.noop,
        onTabOpen: Metro.noop,
        onTabClose: Metro.noop,
        onBeforeTab: Metro.noop_true,
        onTabsCreate: Metro.noop,
    };

    Metro.tabsSetup = (options) => {
        TabsDefaultConfig = $.extend({}, TabsDefaultConfig, options);
    };

    if (typeof globalThis.metroTabsSetup !== "undefined") {
        Metro.tabsSetup(globalThis.metroTabsSetup);
    }

    Metro.Component("tabs", {
        init: function (options, elem) {
            this._super(elem, options, TabsDefaultConfig, {
                _targets: [],
                id: null,
            });

            return this;
        },

        _create: function () {
            const element = this.element;
            const tab = element.find(".active")[0];

            this.id = element.attr("id") || Hooks.useId(this.elem);

            this._createStructure();
            this._createEvents();

            this._open(tab);

            this._fireEvent("tabs-create", {
                element: element,
            });
        },

        _createStructure: function () {
            const element = this.element;
            const o = this.options;
            const container = element.wrap("<div>").addClass("tabs");
            let hamburger;

            container.addClass(`tabs-${o.position}`);

            element.addClass("tabs-list");
            element.addClass(`tabs-${o.type}`);
            element.addClass(`align-${o.align}`);

            element.data("expanded", false);

            const expandTitle = $("<div>").addClass("expand-title");
            container.prepend(expandTitle);

            hamburger = container.find(".hamburger");
            if (hamburger.length === 0) {
                hamburger = $("<button>").attr("type", "button").addClass("hamburger menu-down").appendTo(container);
                for (let i = 0; i < 3; i++) {
                    $("<span>").addClass("line").appendTo(hamburger);
                }
            }

            container.addClass(o.clsTabs);
            element.addClass(o.clsTabsList);
            element.children("li").addClass(o.clsTabsListItem);

            if (o.expand === true) {
                if (!["left", "right"].includes(o.position)) {
                    container.addClass("tabs-expand");
                }
            } else {
                if (
                    Metro.utils.isValue(o.expandPoint) &&
                    Metro.utils.mediaExist(o.expandPoint) &&
                    !["left", "right"].includes(o.position)
                ) {
                    container.addClass("tabs-expand");
                }
            }

            if (["left", "right"].includes(o.position)) {
                container.addClass("tabs-expand");
            }
        },

        _createEvents: function () {
            const that = this;
            const element = this.element;
            const o = this.options;
            const container = element.parent();

            $(globalThis).on(
                Metro.events.resize,
                () => {
                    if (["left", "right"].includes(o.position)) {
                        return;
                    }

                    if (o.expand === true) {
                        if (!["left", "right"].includes(o.position)) {
                            container.addClass("tabs-expand");
                        }
                    } else {
                        if (
                            Metro.utils.isValue(o.expandPoint) &&
                            Metro.utils.mediaExist(o.expandPoint) &&
                            !["left", "right"].includes(o.position)
                        ) {
                            if (!container.hasClass("tabs-expand")) container.addClass("tabs-expand");
                        } else {
                            if (container.hasClass("tabs-expand")) container.removeClass("tabs-expand");
                        }
                    }
                },
                { ns: this.id },
            );

            container.on(Metro.events.click, ".hamburger, .expand-title", () => {
                if (element.data("expanded") === false) {
                    element.addClass("expand");
                    element.data("expanded", true);
                    container.find(".hamburger").addClass("active");
                } else {
                    element.removeClass("expand");
                    element.data("expanded", false);
                    container.find(".hamburger").removeClass("active");
                }
            });

            element.on(Metro.events.click, "li", function (e) {
                const link = $(this).children("a");
                const href = link.attr("href").trim();
                const tab = link.parent("li");

                that._fireEvent("tab", {
                    tab: tab[0],
                    target: tab.children("a").href(),
                });

                if (tab.hasClass("active")) {
                    // e.preventDefault();
                }

                if (element.data("expanded") === true) {
                    element.removeClass("expand");
                    element.data("expanded", false);
                    container.find(".hamburger").removeClass("active");
                }

                if (Metro.utils.exec(o.onBeforeTab, [tab, element], tab[0]) !== true) {
                    return false;
                }

                if (href) {
                    if (href.startsWith("#") && typeof link.attr("data-link") === "undefined") {
                        that._open(tab);
                        e.preventDefault();
                    } else {
                        globalThis.location.href = href;
                    }
                }
            });

            $(globalThis).on("hashchange", () => {
                let hash;
                let tab;

                if (o.updateUri) {
                    hash = globalThis.location.hash;
                    tab = that._findTabByTarget(hash);
                    that._open($(tab));
                }
            });
        },

        _findTabByTarget: function (target) {
            const element = this.element;
            const tabs = element.find("li");
            let tab = undefined;

            tabs.each((i, el) => {
                if (!tab && $(el).children("a").attr("href") === target) {
                    tab = el;
                }
            });

            return tab;
        },

        _collectTargets: function () {
            const that = this;
            const element = this.element;
            const tabs = element.find("li");

            this._targets = [];

            $.each(tabs, function () {
                const tab = $(this);
                if (tab.hasClass("divider")) return;
                const target = tab.find("a").attr("href").trim();
                if (target.length > 1 && target[0] === "#") {
                    that._targets.push(target);
                }
            });
        },

        _open: function (tab_to_open) {
            const element = this.element;
            const o = this.options;
            const tabs = element.find("li");
            const expandTitle = element.siblings(".expand-title");
            const activeTab = element.find("li.active");

            if (tabs.length === 0) {
                return;
            }

            this._collectTargets();

            const tab = typeof tab_to_open === "undefined" ? $(tabs[0]) : $(tab_to_open);
            const link = tab.find("a");
            const target = link.attr("href");
            const tabIndex = tab.index();

            if (target === undefined) {
                return;
            }

            tabs.removeClass("active").removeClass(o.clsTabsListItemActive);
            if (tab.parent().hasClass("d-menu")) {
                tab.parent().parent().addClass("active");
            } else {
                tab.addClass("active");
            }

            if (typeof link.attr("data-link") !== "undefined") {
                return;
            }

            if (o.link) {
                $(`[data-link=${o.link}]`).each((i, el) => {
                    if (el === this.elem) return;
                    const tabs = $(el).find("li");
                    if (tabs.length && tabs[tabIndex]) {
                        tabs[tabIndex].click();
                    }
                });
            }

            $.each(this._targets, function () {
                const t = $(this);
                if (t.length > 0) t.hide();
            });

            if (target !== "#" && target[0] === "#") {
                if (o.updateUri) {
                    globalThis.location.hash = target;
                }
                $(target).show();
            }

            expandTitle.html(tab.find("a").html());

            tab.addClass(o.clsTabsListItemActive);

            if (!activeTab.is(tab)) {
                this._fireEvent("tab-open", {
                    tab: tab[0],
                    target: tab.children("a").attr("href"),
                });

                this._fireEvent("tab-close", {
                    tab: activeTab[0],
                    target: activeTab.children("a").attr("href"),
                });
            }
        },

        next: function () {
            const element = this.element;
            let next;
            const active_tab = element.find("li.active");

            next = active_tab.next("li");
            if (next.length > 0) {
                this._open(next);
            }
        },

        prev: function () {
            const element = this.element;
            let next;
            const active_tab = element.find("li.active");

            next = active_tab.prev("li");
            if (next.length > 0) {
                this._open(next);
            }
        },

        openByTarget: function (target) {
            const tab = this._findTabByTarget(target);
            if (tab) {
                this._open($(tab));
            }
        },

        openByIndex: function (index) {
            const element = this.element;
            const tabs = element.find("li");

            if (Metro.utils.isValue(tabs[index])) this._open($(tabs[index]));
        },

        open: function (tab = 1) {
            if (typeof tab === "number") {
                this.openByIndex(tab - 1);
            } else {
                this.openByTarget(tab);
            }
        },

        changeAttribute: () => {},

        destroy: function () {
            const element = this.element;
            const container = element.parent();

            $(globalThis).off(Metro.events.resize, { ns: this.id });
            container.off(Metro.events.click, ".hamburger, .expand-title");
            element.off(Metro.events.click, "a");

            element.remove();
        },
    });
})(Metro, Dom);
