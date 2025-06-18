((Metro, $) => {
    let ToggleButtonDefaultConfig = {
        onToggleButtonCreate: Metro.noop,
    };

    Metro.toggleButtonSetup = (options) => {
        ToggleButtonDefaultConfig = $.extend({}, ToggleButtonDefaultConfig, options);
    };

    if (typeof window.metroToggleButtonSetup !== "undefined") {
        Metro.toggleButtonSetup(window.metroToggleButtonSetup);
    }

    Metro.Component("toggle-button", {
        init: function (options, elem) {
            this._super(elem, options, ToggleButtonDefaultConfig, {
                // define instance vars here
            });
            return this;
        },

        _create: function () {
            this._createStructure();
            this._createEvents();

            this._fireEvent("radio-buttons-create");
        },

        _createStructure: function () {
            const element = this.element;

            element.addClass("radio-button");
        },

        _createEvents: function () {
            const that = this;
            const element = this.element;
            const o = this.options;

            element.on("click", ".button", function () {
                const toggleButton = $(this);

                if (toggleButton.hasClass("active")) {
                    return;
                }

                element.find(".button").removeClass("active");
                toggleButton.addClass("active");

                that._fireEvent("change", { button: toggleButton });
            });
        },

        changeAttribute: (attr, newValue) => {},

        destroy: function () {
            this.element.remove();
        },
    });
})(Metro, Dom);
