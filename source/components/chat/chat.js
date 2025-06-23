((Metro, $) => {
	// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
	"use strict";

	const attachIcon = `<?xml version="1.0" encoding="utf-8"?><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.617 14.496a1 1 0 0 1 1.414 1.414l-3.182 3.182a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 1 1 7.07 7.07l-5.656 5.658a3 3 0 0 1-4.243-4.243l4.596-4.596a1 1 0 1 1 1.415 1.414l-4.597 4.596a1 1 0 1 0 1.415 1.414l5.656-5.657a3 3 0 1 0-4.242-4.242l-5.657 5.657a5 5 0 1 0 7.071 7.07l3.182-3.181z"/></svg>`;
	const videoIcon = `<?xml version="1.0" encoding="utf-8"?><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 6.34315 14.6569 5 13 5H4C2.34315 5 1 6.34315 1 8V16C1 17.6569 2.34315 19 4 19H13C14.6569 19 16 17.6569 16 16V13.9432L21.4188 17.8137C21.7236 18.0315 22.1245 18.0606 22.4576 17.8892C22.7907 17.7178 23 17.3746 23 17V7C23 6.62541 22.7907 6.28224 22.4576 6.11083C22.1245 5.93943 21.7236 5.96854 21.4188 6.18627L16 10.0568V8ZM16.7205 12L21 8.94319V15.0568L16.7205 12ZM13 7C13.5523 7 14 7.44772 14 8V12V16C14 16.5523 13.5523 17 13 17H4C3.44772 17 3 16.5523 3 16V8C3 7.44772 3.44772 7 4 7H13Z"/></svg>`;
	const audioIcon = `<?xml version="1.0" encoding="utf-8"?><svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.171V0h12v6H6v7c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM4 12H2v2h2v-2zM6 2v2h8V2H6zm8 6.171V6h2v5c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM14 10h-2v2h2v-2z" fill-rule="evenodd"/></svg>`;
	const imageIcon = `️<?xml version="1.0" encoding="utf-8"?><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"/><path d="M4.80665 17.5211L9.1221 9.60947C9.50112 8.91461 10.4989 8.91461 10.8779 9.60947L14.0465 15.4186L15.1318 13.5194C15.5157 12.8476 16.4843 12.8476 16.8682 13.5194L19.1451 17.5039C19.526 18.1705 19.0446 19 18.2768 19H5.68454C4.92548 19 4.44317 18.1875 4.80665 17.5211Z" /><path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z"/></svg>`;
	const textIcon = `<?xml version="1.0" encoding="utf-8"?><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H12H20C20.5523 4 21 4.44772 21 5V7C21 7.55228 20.5523 8 20 8C19.4477 8 19 7.55228 19 7V6H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H12H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V6H5V7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7V5Z" /></svg>`;
	const binaryIcon = `<?xml version="1.0" encoding="utf-8"?><svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M4,11A3,3,0,0,0,7,8V6A3,3,0,0,0,1,6V8A3,3,0,0,0,4,11ZM3,6A1,1,0,0,1,5,6V8A1,1,0,0,1,3,8ZM19,6a3,3,0,0,0-6,0V8a3,3,0,0,0,6,0ZM17,8a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Zm-7,3a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0v6A1,1,0,0,1,10,11ZM23,4v6a1,1,0,0,1-2,0V4a1,1,0,0,1,2,0ZM7,18V16a3,3,0,0,0-6,0v2a3,3,0,0,0,6,0ZM3,18V16a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm6,0a3,3,0,0,0,6,0V16a3,3,0,0,0-6,0Zm2-2a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm12-2v6a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm-5-1a1,1,0,0,1,1,1v6a1,1,0,0,1-2,0V14A1,1,0,0,1,18,13Z"/></svg>`;

	let ChatDefaultConfig = {
		chatDeferred: 0,
		inputTimeFormat: null,
		timeFormat: "D MMM hh:mm A",
		name: "John Doe",
		avatar: "<span>👦</span>",
		welcome: null,
		welcomeAvatar: "<span>👽</span>",
		title: null,
		width: "100%",
		height: "auto",
		messages: null,
		sendButtonTitle: "",
		sendButtonIcon: "",
		attachButtonTitle: "",
		attachButtonIcon: "📎",
		readonly: false,
		attachAccept: "*",
		scrollSpeed: 200,

		clsChat: "",
		clsName: "",
		clsTime: "",
		clsInput: "",
		clsSendButton: "",
		clsAttachButton: "",
		clsMessageLeft: "default",
		clsMessageRight: "default",

		onMessage: Metro.noop,
		onSend: Metro.noop,
		onSendButtonClick: Metro.noop,
		onChatCreate: Metro.noop,
	};

	Metro.chatSetup = (options) => {
		ChatDefaultConfig = $.extend({}, ChatDefaultConfig, options);
	};

	if (typeof globalThis.metroChatSetup !== "undefined") {
		Metro.chatSetup(globalThis.metroChatSetup);
	}

	Metro.Component("chat", {
		init: function (options, elem) {
			this._super(elem, options, ChatDefaultConfig, {
				input: null,
				classes:
					"primary secondary success alert warning yellow info dark light".split(
						" ",
					),
				lastMessage: null,
				attach: null,
				file: null,
				locale: null,
			});

			return this;
		},

		_create: function () {
			const element = this.element;

			this.locale = element.closest("[lang]").attr("lang") || "en";

			this._createStructure();
			this._createEvents();

			this._fireEvent("chat-create", {
				element: element,
			});
		},

		_createStructure: function () {
			const that = this;
			const element = this.element;
			const o = this.options;
			const customButtons = [
				{
					text: `${o.sendButtonTitle || this.strings.label_send}${o.sendButtonIcon}`,
					cls: `${o.clsSendButton} js-chat-send-button`,
					onclick: o.onSendButtonClick,
				},
			];

			element.addClass("chat").addClass(o.clsChat);

			this.file = $("<input type='file'>").appendTo(element);
			this.file.attr("accept", o.attachAccept);
			this.file.css({
				display: "none",
			});

			element.css({
				width: o.width,
				height: o.height,
			});

			if (Metro.utils.isValue(o.title)) {
				$("<div>").addClass("title").html(o.title).appendTo(element);
			}

			const messages = $("<div>").addClass("messages");
			messages.appendTo(element);
			const messageInput = $("<div>")
				.addClass("message-input")
				.appendTo(element);

			const attachBtn = $("<span>")
				.addClass(`flat js-chat-attach-button ${o.clsAttachButton}`)
				.attr("title", o.attachButtonTitle || this.strings.label_attach)
				.html(attachIcon);
			attachBtn.appendTo(messageInput);

			const input = $("<input type='text'>").addClass("chat-input");
			input.appendTo(messageInput);
			Metro.makePlugin(input[0], "input", {
				customButtons: customButtons,
				clsInput: o.clsInput,
			});

			if (o.welcome) {
				this.add({
					text: o.welcome,
					time: datetime(),
					position: "left",
					name: "Chat Bot",
					avatar: o.welcomeAvatar,
				});
			}

			if (typeof o.messages === "string" && o.messages) {
				o.messages = Metro.utils.isObject(o.messages);
			}

			if (
				o.messages &&
				typeof o.messages === "object" &&
				Metro.utils.objectLength(o.messages) > 0
			) {
				$.each(o.messages, function () {
					that.add(this);
				});
			}

			element
				.find(".message-input")
				[o.readonly ? "addClass" : "removeClass"]("disabled");
		},

		_createEvents: function () {
			const element = this.element;
			const o = this.options;
			const input = element.find(".chat-input input");

			const send = () => {
				const msg = `${input.val()}`;
				if (msg.trim() === "" && !this.attach) {
					return false;
				}
				const m = {
					id: Metro.utils.elementId("chat-message"),
					name: o.name,
					avatar: o.avatar,
					text: msg,
					position: "right",
					time: datetime(),
					attach: this.attach
						? new File([this.attach], this.attach.name, {
								type: this.attach.type,
								lastModified: this.attach.lastModified,
							})
						: null,
				};
				this.add(m);
				input.val("");
				this.attach = null;
				this._fireEvent("send", {
					msg: m,
				});
				input.focus();
			};

			element.on(Metro.events.click, ".js-chat-send-button", () => {
				send();
			});

			element.on(Metro.events.keyup, ".chat-input > input", (e) => {
				if (e.keyCode === Metro.keyCode.ENTER) {
					send();
				}
			});

			element.on(Metro.events.click, ".js-chat-attach-button", () => {
				this.file[0].click();
			});

			this.file.on("change", (e) => {
				const file = e.target.files[0];
				if (file) {
					this.attach = file;
					send();
				}
			});
		},

		add: function (msg) {
			const element = this.element;
			const o = this.options;
			let avatar;
			let text;
			const messages = element.find(".messages");

			const addLink = (url, attach) => {
				return `<div class="attach-link"><a class="attach" href="${url}" target="_blank" download="${attach.name}">${attach.name} <span class="reduce-2">(Size: ${Math.round(attach.size / 1024 ** 2)} MB)</span></a></div>`;
			};

			const includeAttach = (attach) => {
				if (attach === null) {
					return "";
				}
				const file = URL.createObjectURL(attach);

				let attachHtml = `<div class="message-attach">`;
				if (attach.type.startsWith("image/")) {
					attachHtml += `<img class="attach" src="${file}" alt="${attach.name}">`;
					attachHtml += addLink(file, attach);
				} else if (attach.type.startsWith("video/")) {
					attachHtml += `<video class="attach" controls><source src="${file}" type="${attach.type}"></video>`;
					attachHtml += addLink(file, attach);
				} else if (attach.type.startsWith("audio/")) {
					attachHtml += `<audio class="attach" controls><source src="${file}" type="${attach.type}"></audio>`;
					attachHtml += addLink(file, attach);
				} else {
					attachHtml += addLink(file, attach);
				}
				attachHtml += `</div>`;
				return attachHtml;
			};

			const messageDate = o.inputTimeFormat
				? Datetime.from(msg.time, o.inputTimeFormat, this.locale)
				: datetime(msg.time);

			const message = $("<div>")
				.addClass("message")
				.addClass(msg.position)
				.appendTo(messages);

			const item = $("<div>").addClass("message-item").appendTo(message);

			if (Metro.utils.isUrl(msg.avatar) || msg.avatar.includes("data:image")) {
				avatar = $("<img>")
					.attr("src", msg.avatar)
					.attr("alt", msg.avatar)
					.addClass("message-avatar")
					.appendTo(item);
			} else if (msg.avatar) {
				const _el = $(msg.avatar);
				if (_el.length) {
					avatar = _el.addClass("message-avatar").appendTo(item);
				} else {
					avatar = $("<span>")
						.addClass("message-avatar")
						.html(msg.avatar)
						.appendTo(item);
				}
			}

			let _msg = Str.stripTags(msg.text);

			// _msg = _msg.replace(/```(\w+)?\n?([\s\S]*?)```/g, "<pre><code class='$1'>$2</code></pre>");
			_msg = _msg.replace(/`([^`]+)`/g, "<code>$1</code>");

			if (_msg.startsWith("http")) {
				_msg = `<a href="${_msg}" target="_blank">${_msg}</a>`;
			}

			text = $("<div>")
				.addClass("message-text")
				.append(
					$("<div>")
						.addClass("message-text-inner")
						.html(msg.attach ? includeAttach(msg.attach) : _msg),
				)
				.appendTo(item);

			const time = $("<div>")
				.addClass("message-time")
				.addClass(o.clsTime)
				.text(messageDate.format(o.timeFormat))
				.appendTo(text);

			const sender = $("<div>")
				.addClass("message-sender")
				.addClass(o.clsName)
				.text(msg.name)
				.appendTo(text);

			if (Metro.utils.isValue(msg.id)) {
				message.attr("id", msg.id);
			}

			if (msg.position === "left" && Metro.utils.isValue(o.clsMessageLeft)) {
				text.addClass(o.clsMessageLeft);
			}

			if (msg.position === "right" && Metro.utils.isValue(o.clsMessageRight)) {
				text.addClass(o.clsMessageRight);
			}

			if (this.lastMessage && this.lastMessage.position === msg.position) {
				text.addClass("--next");
				avatar.visible(false);
				sender.hide();
			}

			this._fireEvent("message", {
				msg: msg,
				el: {
					message: message,
					sender: sender,
					time: time,
					item: item,
					avatar: avatar,
					text: text,
				},
			});

			messages.animate({
				draw: {
					scrollTop: messages[0].scrollHeight,
				},
				dur: o.scrollSpeed,
			});

			this.lastMessage = msg;

			return this;
		},

		addMessages: function (messages) {
			const that = this;
			let _messages = messages;

			if (typeof _messages === "string" && _messages) {
				_messages = Metro.utils.isObject(_messages);
			}

			if (
				typeof _messages === "object" &&
				Metro.utils.objectLength(_messages) > 0
			) {
				$.each(_messages, function () {
					that.add(this);
				});
			}

			return this;
		},

		delMessage: function (id) {
			const element = this.element;

			element.find(".messages").find(`#${id}`).remove();

			return this;
		},

		updMessage: function (msg) {
			const element = this.element;
			const o = this.options;
			const msgId = typeof msg === "string" ? msg : msg.id;
			const message = element.find(".messages").find(`#${msgId}`);

			if (message.length === 0) return this;

			const messageDate = o.inputTimeFormat
				? Datetime.from(msg.time, o.inputTimeFormat, this.locale)
				: datetime(msg.time);

			message.find(".message-text-inner").html(msg.text);
			message.find(".message-time").html(messageDate.format(o.timeFormat));

			return this;
		},

		clear: function () {
			const element = this.element;
			const messages = element.find(".messages");
			messages.html("");
			this.lastMessage = null;
		},

		toggleReadonly: function (readonly) {
			const element = this.element;
			const o = this.options;
			o.readonly = typeof readonly === "undefined" ? !o.readonly : readonly;
			element
				.find(".message-input")
				[o.readonly ? "addClass" : "removeClass"]("disabled");
		},

		changeAttribute: function (attributeName) {
			switch (attributeName) {
				case "data-readonly":
					this.toggleReadonly();
					break;
			}
		},

		destroy: function () {
			const element = this.element;
			const sendButton = element.find(".js-chat-send-button");
			const input = element.find("input[type=text]");

			sendButton.off(Metro.events.click);
			input.off(Metro.events.keyup);

			return element;
		},
	});

	Metro.defaults.Chat = ChatDefaultConfig;
})(Metro, Dom);
