/*
 * TODO:
 *  1. syntax highlighting
 *  2. markdown editor
 * */
((Metro, $) => {
	// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
	"use strict";

	let TextareaDefaultConfig = {
		label: "",
		textareaDeferred: 0,
		charsCounter: null,
		charsCounterTemplate: "$1",
		defaultValue: "",
		prepend: "",
		append: "",
		clearButton: true,
		clearButtonIcon: "❌",
		btnSize: "default",
		autoSize: true,
		maxHeight: 0,
		initialHeight: 100,
		clsPrepend: "",
		clsAppend: "",
		clsComponent: "",
		clsTextarea: "",
		clsLabel: "",
		onChange: Metro.noop,
		onTextareaCreate: Metro.noop,
	};

	Metro.textareaSetup = (options) => {
		TextareaDefaultConfig = $.extend({}, TextareaDefaultConfig, options);
	};

	if (typeof globalThis.metroTextareaSetup !== "undefined") {
		Metro.textareaSetup(globalThis.metroTextareaSetup);
	}

	Metro.Component("textarea", {
		init: function (options, elem) {
			this._super(elem, options, TextareaDefaultConfig);
			return this;
		},

		_create: function () {
			const element = this.element;

			this._createStructure();
			this._createEvents();

			this._fireEvent("textarea-create", {
				element: element,
			});
		},

		_createStructure: function () {
			const element = this.element;
			const elem = this.elem;
			const o = this.options;
			let clearButton;
			const fakeTextarea = $("<textarea>").addClass("fake-textarea");

			if (!element.id()) {
				element.attr("id", Hooks.useId(element[0]));
			}

			const container = element
				.wrap("<div>")
				.addClass(`textarea ${element[0].className}`);
			container.attr("id", Hooks.useId(container[0]));

			fakeTextarea.appendTo(container);

			if (o.clearButton !== false && !element[0].readOnly) {
				clearButton = $("<button>")
					.addClass(`button square input-clear-button`)
					.attr("tabindex", -1)
					.attr("type", "button")
					.html(o.clearButtonIcon);
				clearButton.appendTo(container);
			}

			if (element.attr("dir") === "rtl") {
				container.addClass("rtl").attr("dir", "rtl");
			}

			if (o.prepend !== "") {
				const prepend = $("<div>").html(o.prepend);
				prepend.addClass("prepend").addClass(o.clsPrepend).appendTo(container);
			}

			if (o.append !== "") {
				const append = $("<div>").html(o.append);
				append.addClass("append").addClass(o.clsAppend).appendTo(container);
				clearButton.css({
					right: append.outerWidth() + 4,
				});
			}

			elem.className = "";

			if (Metro.utils.isValue(o.defaultValue) && element.val().trim() === "") {
				element.val(o.defaultValue);
			}

			container.addClass(o.clsComponent);
			element.addClass(o.clsTextarea);

			this._addLabel(o.label, container, {
				className: o.clsLabel,
				id: element.attr("id"),
				dir: element.attr("dir"),
			});

			if (element.is(":disabled")) {
				this.disable();
			} else {
				this.enable();
			}

			fakeTextarea.val(element.val());

			container.find("textarea").css({
				minHeight: o.initialHeight + "px",
			});

			if (o.autoSize === true) {
				container.addClass("autosize no-scroll-vertical");

				setTimeout(() => {
					this.resize();
				}, 100);
			}

			this.component = container;
		},

		_createEvents: function () {
			const that = this;
			const element = this.element;
			const o = this.options;
			const textarea = element.closest(".textarea");
			const fakeTextarea = textarea.find(".fake-textarea");
			const chars_counter = $(o.charsCounter);

			textarea.on(Metro.events.click, ".input-clear-button", (e) => {
				element
					.val(Metro.utils.isValue(o.defaultValue) ? o.defaultValue : "")
					.trigger("change")
					.trigger("keyup")
					.focus();
				e.preventDefault();
				e.stopPropagation();
			});

			if (o.autoSize) {
				element.on(
					`${Metro.events.inputchange} ${Metro.events.keyup}`,
					function () {
						fakeTextarea.val(this.value);
						that.resize();
					},
				);
			}

			element.on(Metro.events.blur, () => {
				textarea.removeClass("focused");
			});
			element.on(Metro.events.focus, () => {
				textarea.addClass("focused");
			});

			element.on(Metro.events.keyup, () => {
				if (Metro.utils.isValue(o.charsCounter) && chars_counter.length > 0) {
					if (chars_counter[0].tagName === "INPUT") {
						chars_counter.val(that.length());
					} else {
						chars_counter.html(
							o.charsCounterTemplate.replace("$1", that.length()),
						);
					}
				}

				that._fireEvent("change", {
					val: element.val(),
					length: that.length(),
				});
			});
		},

		resize: function () {
			const element = this.element;
			const o = this.options;
			const textarea = element.closest(".textarea");
			const fakeTextarea = textarea.find(".fake-textarea");
			const currentHeight = fakeTextarea[0].scrollHeight;

			if (o.maxHeight && currentHeight >= o.maxHeight) {
				textarea.removeClass("no-scroll-vertical");
				return;
			}

			if (o.maxHeight && currentHeight < o.maxHeight) {
				textarea.addClass("no-scroll-vertical");
			}

			fakeTextarea[0].style.cssText = "height:auto;";
			fakeTextarea[0].style.cssText = `height:${fakeTextarea[0].scrollHeight}px; min-height:${o.initialHeight}px;`;
			element[0].style.cssText = `height:${fakeTextarea[0].scrollHeight}px; min-height:${o.initialHeight}px;`;
		},

		clear: function () {
			this.element.val("").trigger("change").trigger("keyup").focus();
		},

		toDefault: function () {
			this.element
				.val(
					Metro.utils.isValue(this.options.defaultValue)
						? this.options.defaultValue
						: "",
				)
				.trigger("change")
				.trigger("keyup")
				.focus();
		},

		length: function () {
			const characters = this.elem.value.split("");
			return characters.length;
		},

		disable: function () {
			this.element.data("disabled", true);
			this.element.parent().addClass("disabled");
		},

		enable: function () {
			this.element.data("disabled", false);
			this.element.parent().removeClass("disabled");
		},

		toggleState: function () {
			if (this.elem.disabled) {
				this.disable();
			} else {
				this.enable();
			}
		},

		changeAttribute: function (attributeName) {
			switch (attributeName) {
				case "disabled":
					this.toggleState();
					break;
			}
		},

		destroy: function () {
			const element = this.element;
			const o = this.options;
			const textarea = element.closest(".textarea");

			textarea.off(Metro.events.click, ".input-clear-button");

			if (o.autoSize) {
				element.off(`${Metro.events.inputchange} ${Metro.events.keyup}`);
			}

			element.off(Metro.events.blur);
			element.off(Metro.events.focus);

			element.off(Metro.events.keyup);

			if (o.label) {
				this.component.prev("label").remove();
			}
			this.component.remove();
		},
	});
})(Metro, Dom);
