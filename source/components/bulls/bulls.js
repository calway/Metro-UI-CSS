((Metro, $) => {
    // biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
    "use strict";

    let BullDefaultConfig = {
        type: "success", // success, fail, pending
        size: 16,
        onBullCreate: Metro.noop,
        onBullChange: Metro.noop,
    };

    Metro.bullSetup = (options) => {
        BullDefaultConfig = $.extend({}, BullDefaultConfig, options);
    };

    if (typeof globalThis.metroBullSetup !== "undefined") {
        Metro.bullSetup(globalThis.metroBullSetup);
    }

    Metro.Component("bull", {
        init: function (options, elem) {
            this._super(elem, options, BullDefaultConfig, {
                // define instance vars here
            });
            return this;
        },

        _create: function () {
            this._createStructure();
            this._fireEvent("bull-create");
        },

        _createStructure: function () {
            const element = this.element;
            const o = this.options;
            let bull;
            switch (o.type.toLowerCase()) {
                case "success":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="completed successfully" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#57ab5a" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></path></svg>`;
                    break;
                case "pending":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="currently running" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="ani-spin"><path fill="none" stroke="#DBAB0A" stroke-width="2" d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z" opacity=".5"></path><path fill="#DBAB0A" fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clip-rule="evenodd"></path><path fill="#DBAB0A" d="M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"></path></svg>`;
                    break;
                case "fail":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="failed" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#e5534b" d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path></svg>`;
                    break;
                case "warning":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="warning" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#ff4d00" d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M224,272 C208.761905,272 197.333333,283.264 197.333333,298.282667 C197.333333,313.984 208.415584,325.248 224,325.248 C239.238095,325.248 250.666667,313.984 250.666667,298.624 C250.666667,283.264 239.238095,272 224,272 Z M245.333333,106.666667 L202.666667,106.666667 L202.666667,234.666667 L245.333333,234.666667 L245.333333,106.666667 Z" id="Combined-Shape"></path></svg>`;
                    break;
                case "bulb":
                    bull = `<svg width="${o.size}" height="${o.size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#ffde21" d="M213.333333,85.3333333 C284.025781,85.3333333 341.333333,142.640885 341.333333,213.333333 C341.333333,260.711239 315.5928,302.077122 277.333732,324.208982 L277.333333,405.333333 L256,426.666667 L234.666667,426.666667 C234.666667,438.448741 225.115408,448 213.333333,448 C201.551259,448 192,438.448741 192,426.666667 L192,426.666667 L170.666667,426.666667 L149.333333,405.333333 L149.332954,324.208993 C111.073876,302.077136 85.3333333,260.711248 85.3333333,213.333333 C85.3333333,142.640885 142.640885,85.3333333 213.333333,85.3333333 Z M234.667665,339.563386 C227.72957,340.727434 220.602209,341.333333 213.333333,341.333333 C206.064458,341.333333 198.937097,340.727434 191.999002,339.563386 L192,384 L234.666667,384 L234.667665,339.563386 Z M96.4250122,307.614237 L119.052429,330.241654 L73.7975952,375.496488 L51.1701782,352.869071 L96.4250122,307.614237 Z M330.241654,307.614237 L375.496488,352.869071 L352.869071,375.496488 L307.614237,330.241654 L330.241654,307.614237 Z M426.666667,197.333333 L426.666667,229.333333 L362.666667,229.333333 L362.666667,197.333333 L426.666667,197.333333 Z M64,197.333333 L64,229.333333 L7.10542736e-15,229.333333 L7.10542736e-15,197.333333 L64,197.333333 Z M352.869071,51.1701782 L375.496488,73.7975952 L330.241654,119.052429 L307.614237,96.4250122 L352.869071,51.1701782 Z M73.7975952,51.1701782 L119.052429,96.4250122 L96.4250122,119.052429 L51.1701782,73.7975952 L73.7975952,51.1701782 Z M229.333333,-1.0658141e-14 L229.333333,64 L197.333333,64 L197.333333,-1.0658141e-14 L229.333333,-1.0658141e-14 Z" id="Combined-Shape"></path></svg>`;
                    break;
                case "star":
                    bull = `<svg width="${o.size}" height="${o.size}" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm.252-12.932a.476.476 0 0 0-.682.195l-1.2 2.432-2.684.39a.477.477 0 0 0-.266.816l1.944 1.892-.46 2.674a.479.479 0 0 0 .694.504L8 10.709l2.4 1.261a.478.478 0 0 0 .694-.504l-.458-2.673L12.578 6.9a.479.479 0 0 0-.265-.815l-2.685-.39-1.2-2.432a.473.473 0 0 0-.176-.195Z"></path></svg>`;
                    break;
                case "badge":
                    bull = `<svg width="${o.size}" height="${o.size}" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.22 6.5a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0Z"></path><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM4 5v3.38c.001.397.159.778.44 1.059l3.211 3.213a1.202 1.202 0 0 0 1.698 0l3.303-3.303a1.202 1.202 0 0 0 0-1.698L9.439 4.44A1.5 1.5 0 0 0 8.379 4H5a1 1 0 0 0-1 1Z"></path></svg>`;
                    break;
                case "chat":
                    bull = `<svg width="${o.size}" height="${o.size}" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM4 5v5a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 .854.354L8.707 11H11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"></path></svg>`;
                    break;
                case "tree":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="tree" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM6 6.928a1.75 1.75 0 1 0-1 0V7.5A1.5 1.5 0 0 0 6.5 9h1v1.072a1.75 1.75 0 1 0 1 0V9h1A1.5 1.5 0 0 0 11 7.5v-.572a1.75 1.75 0 1 0-1 0V7.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"></path></svg>`;
                    break;
                case "dot":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="dot" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>`;
                    break;
                case "checkmark":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="checkmark" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"></path></svg>`;
                    break;
                case "cancel":
                    bull = `<svg width="${o.size}" height="${o.size}" aria-label="cancel" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm9.78-2.22-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg>`;
                    break;
            }
            element.clear().html(bull);
        },

        setType: function (type = "default") {
            const o = this.options;

            if (type === o.type) {
                return;
            }

            o.type = type.toLowerCase();
            this._createStructure();
            this._fireEvent("bull-change");
        },

        changeAttribute: function (attr, value) {
            if (attr === "data-type") {
                this._createStructure();
            }
        },

        destroy: function () {
            this.element.remove();
        },
    });
})(Metro, Dom);
