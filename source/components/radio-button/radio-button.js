((Metro, $) => {
    let RadioButtonDefaultConfig = {
        onRadioButtonCreate: Metro.noop,
    };

    Metro.radioButtonSetup = (options) => {
        RadioButtonDefaultConfig = $.extend({}, RadioButtonDefaultConfig, options);
    };

    if (typeof window.metroRadioButtonSetup !== "undefined") {
        Metro.radioButtonSetup(window.metroRadioButtonSetup);
    }

    Metro.Component("radio-button", {
        init: function (options, elem) {
            this._super(elem, options, RadioButtonDefaultConfig, {
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
                const radioButton = $(this);

                if (radioButton.hasClass("active")) {
                    return;
                }

                element.find(".button").removeClass("active");
                radioButton.addClass("active");

                that._fireEvent("change", { button: radioButton });
            });
        },

        changeAttribute: (attr, newValue) => {},

        destroy: function () {
            this.element.remove();
        },
    });
})(Metro, Dom);
