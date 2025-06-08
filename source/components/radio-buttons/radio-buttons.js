((Metro, $) => {
    let RadioButtonsDefaultConfig = {
        onRadioButtonsCreate: Metro.noop,
    }

    Metro.radioButtonsSetup = (options) => {
        RadioButtonsDefaultConfig = $.extend({}, RadioButtonsDefaultConfig, options)
    }

    if (typeof window.metroRadioButtonsSetup !== 'undefined') {
        Metro.radioButtonsSetup(window.metroRadioButtonsSetup)
    }

    Metro.Component('radio-buttons', {
        init: function (options, elem) {
            this._super(elem, options, RadioButtonsDefaultConfig, {
                // define instance vars here
            })
            return this
        },

        _create: function () {
            this._createStructure()
            this._createEvents()

            this._fireEvent('radio-buttons-create')
        },

        _createStructure: function () {
            const element = this.element
            
            element.addClass('radio-buttons')
        },

        _createEvents: function () {
            const that = this
            const element = this.element
            const o = this.options
            
            element.on('click', '.button', function () {
                const radioButton = $(this)

                if (radioButton.hasClass('active')) {
                    return;
                }

                element.find('.button').removeClass('active')
                radioButton.addClass('active')

                that._fireEvent('change', {button: radioButton})
            })
        },

        changeAttribute: (attr, newValue) => {},

        destroy: function () {
            this.element.remove()
        },
    })
})(Metro, Dom)
