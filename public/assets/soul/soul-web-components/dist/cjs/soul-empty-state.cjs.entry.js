'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a33e737d.js');
const utils = require('./utils-b4bbc9bf.js');

const soulEmptyStateCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}.h-anchor-container{position:relative}.h-anchor-to-container{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.h-bg-color--brand-base{background-color:var(--soul-theme-color-base)}.h-bg-color--brand-light{background-color:var(--soul-theme-color-primary-50)}.h-cursor-pointer{cursor:pointer}.h-cursor-default{cursor:default}.h-file-input-hidden{position:relative}.h-file-input-hidden input[type=file]{position:absolute;top:0;bottom:0;right:0;margin:0;opacity:0;direction:ltr;cursor:pointer;width:100%}.h-x-auto-scroll{overflow-x:auto}.h-y-auto-scroll{overflow-y:auto}.h-xy-auto-scroll{overflow:auto}.h-no-scroll{overflow:hidden}.h-shadow-s{box-shadow:0 0 0.5rem 0 hsla(210, 24%, 16%, 0.1)}.h-shadow-m{box-shadow:0 0 1rem 0 hsla(210, 24%, 16%, 0.1)}.h-shadow-dark-m{box-shadow:0 0 0.5rem 0 hsla(210, 24%, 16%, 0.5)}.h-show-on-top{z-index:8000}.h-hidden{display:none}.h-visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}.h-opacity{opacity:0.5}.soul-font-size-2-xs{font-size:var(--soul-font-size-2-xs);line-height:var(--soul-line-height-2-xs)}.soul-font-size-xs{font-size:var(--soul-font-size-xs);line-height:var(--soul-line-height-xs)}.soul-font-size-s{font-size:var(--soul-font-size-s);line-height:var(--soul-line-height-s)}.soul-font-size-m{font-size:var(--soul-font-size-m);line-height:var(--soul-line-height-m)}.soul-font-size-l{font-size:var(--soul-font-size-l);line-height:var(--soul-line-height-l)}.soul-font-size-xl{font-size:var(--soul-font-size-xl);line-height:var(--soul-line-height-xl)}.soul-font-size-2-xl{font-size:var(--soul-font-size-2-xl);line-height:var(--soul-line-height-2-xl)}.soul-font-size-3-xl{font-size:var(--soul-font-size-3-xl);line-height:var(--soul-line-height-3-xl)}.h-capitalize{text-transform:capitalize}.h-text-uppercase{text-transform:uppercase}.h-tx-color--brand-base{color:var(--soul-theme-color-base)}.h-tx-color--brand-light{color:var(--soul-theme-color-primary-50)}.h-truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.h-text-align-center{text-align:center}.h-text-align-right{text-align:right}.h-text-align-left{text-align:left}.h-veil{position:fixed;top:0;left:0;height:100vh;width:100vw}.h-veil--light{background-color:hsla(0, 0%, 100%, 0.8)}.soul-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center}.soul-empty-state__heading,.soul-empty-state__text,.soul-empty-state__help-text{color:var(--soul-theme-color-neutral-500);text-align:center;max-width:var(--_soul-empty-state-row-max-width)}.soul-empty-state__heading{font-family:\"soul-sans\", \"Helvetica Neue\", Arial, sans-serif;font-weight:500;font-style:normal;font-size:var(--_soul-empty-state-heading-font-size);line-height:var(--_soul-empty-state-heading-line-height);margin:var(--_soul-empty-state-heading-margin)}.soul-empty-state__text{font-size:var(--_soul-empty-state-text-font-size);line-height:var(--_soul-empty-state-text-line-height);margin:var(--_soul-empty-state-text-margin)}.soul-empty-state__help-text{font-size:var(--_soul-empty-state-help-text-font-size);line-height:var(--_soul-empty-state-help-text-line-height);margin:var(--_soul-empty-state-help-text-margin)}.soul-empty-state__text,.soul-empty-state__help-text{font-family:\"soul-sans\", \"Helvetica Neue\", Arial, sans-serif;font-weight:400;font-style:normal}.soul-empty-state__action{margin:var(--_soul-empty-state-action-margin)}.soul-empty-state__additional-action{margin:var(--_soul-empty-state-additional-action-margin)}::slotted(soul-icon){--soul-icon-size:var(--_soul-empty-state-illustration-size);--soul-icon-color:linear-gradient(to bottom, var(--soul-theme-color-neutral-300) 20%, var(--soul-theme-color-neutral-400))}::slotted(soul-file-icon){--soul-file-icon-size:var(--_soul-empty-state-illustration-size);filter:linear-gradient(to bottom, var(--soul-theme-color-neutral-300) 20%, var(--soul-theme-color-neutral-400))}::slotted([slot=illustration]){max-height:var(--_soul-empty-state-illustration-max-height);max-width:var(--_soul-empty-state-illustration-max-width)}:host,:host([size=m]){display:block;--_soul-empty-state-heading-font-size:var(--soul-font-size-l);--_soul-empty-state-heading-line-height:var(--soul-line-height-l);--_soul-empty-state-heading-margin:0.5rem 0 0 0;--_soul-empty-state-text-font-size:var(--soul-font-size-m);--_soul-empty-state-text-line-height:var(--soul-line-height-m);--_soul-empty-state-text-margin:0.25rem 0 0 0;--_soul-empty-state-help-text-font-size:var(--soul-font-size-xs);--_soul-empty-state-help-text-line-height:var(--soul-line-height-xs);--_soul-empty-state-help-text-margin:1rem 0 0 0;--_soul-empty-state-row-max-width:45ch;--_soul-empty-state-illustration-size:5rem;--_soul-empty-state-action-margin:1rem 0 0 0;--_soul-empty-state-additional-action-margin:0.75rem 0 0 0;--_soul-empty-state-illustration-max-height:8rem;--_soul-empty-state-illustration-max-width:14rem}:host([size=s]){--_soul-empty-state-heading-font-size:var(--soul-font-size-s);--_soul-empty-state-heading-line-height:var(--soul-line-height-s);--_soul-empty-state-heading-margin:0.25rem 0 0 0;--_soul-empty-state-text-font-size:var(--soul-font-size-s);--_soul-empty-state-text-line-height:var(--soul-line-height-s);--_soul-empty-state-text-margin:0.125rem 0 0 0;--_soul-empty-state-help-text-font-size:var(--soul-font-size-xs);--_soul-empty-state-help-text-line-height:var(--soul-line-height-xs);--_soul-empty-state-help-text-margin:0.5rem 0 0 0;--_soul-empty-state-row-max-width:45ch;--_soul-empty-state-illustration-size:3rem;--_soul-empty-state-action-margin:0.5rem 0 0 0;--_soul-empty-state-additional-action-margin:0.25rem 0 0 0;--_soul-empty-state-illustration-max-height:6rem;--_soul-empty-state-illustration-max-width:10rem}";

const SoulEmptyState = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.supportedSizes = ['s', 'm'];
    this.heading = undefined;
    this.text = undefined;
    this.helpText = undefined;
    this.size = undefined;
  }
  hideEmptySlot(slot) {
    var _a, _b;
    slot.assignedNodes().length === 0 ?
      (_a = slot.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('h-hidden') :
      (_b = slot.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove('h-hidden');
  }
  sizeChange(newValue) {
    this.validateSize(newValue);
  }
  validateSize(newValue) {
    if (!this.supportedSizes.includes(newValue)) {
      console.debug(`Size ${newValue} not supported. Supported sizes: ${this.supportedSizes.join(', ')}`);
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "soul-empty-state" }, index.h("div", { class: "soul-empty-state__illustration" }, index.h("slot", { name: "illustration" })), index.h("strong", { class: "soul-empty-state__heading" }, this.heading), utils.isNotEmpty(this.text) ? index.h("p", { class: "soul-empty-state__text" }, this.text) : '', index.h("div", { class: "soul-empty-state__action h-hidden" }, index.h("slot", { name: "action", ref: el => this.actionSlot = el, onSlotchange: () => this.hideEmptySlot(this.actionSlot) })), index.h("div", { class: "soul-empty-state__additional-action h-hidden" }, index.h("slot", { name: "additional-action", ref: el => this.additionalActionSlot = el, onSlotchange: () => this.hideEmptySlot(this.additionalActionSlot) })), utils.isNotEmpty(this.helpText) ? index.h("span", { class: "soul-empty-state__help-text" }, this.helpText) : '')));
  }
  static get watchers() { return {
    "size": ["sizeChange"]
  }; }
};
SoulEmptyState.style = soulEmptyStateCss;

exports.soul_empty_state = SoulEmptyState;

//# sourceMappingURL=soul-empty-state.cjs.entry.js.map