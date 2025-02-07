import { r as registerInstance, c as createEvent, h } from './index-b23b9bfc.js';
import { b as isNotNull } from './utils-934fcc35.js';

const soulBenefitModalCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}@keyframes slide-up{0%{transform:translateY(2rem);opacity:0}100%{opacity:1;transform:translateY(0)}}@keyframes slide-down{0%{transform:translateY(0);opacity:1}100%{opacity:0;transform:translateY(2rem)}}@keyframes slide-left-to-reveal{0%{transform:translateX(2rem);opacity:0}100%{opacity:1;transform:translateX(0)}}@keyframes slide-left-to-hide{0%{transform:translateX(0);opacity:1}100%{opacity:0;transform:translateX(-2rem)}}@keyframes slide-right-to-hide{0%{transform:translateX(0);opacity:1}100%{opacity:0;transform:translateX(2rem)}}@keyframes slide-right-to-reveal{0%{transform:translateX(-2rem);opacity:0}100%{opacity:1;transform:translateX(0)}}.soul-benefit-modal[open]{animation-name:slide-up;animation-duration:150ms;animation-fill-mode:both;animation-timing-function:ease-out}.soul-benefit-modal[open].soul-benefit-modal--closing{animation-name:slide-down;animation-duration:150ms;animation-fill-mode:both;animation-timing-function:ease-out}@media screen and (prefers-reduced-motion){.soul-benefit-modal[open],.soul-benefit-modal[open].soul-benefit-modal--closing{animation-duration:0ms}}:host{display:block}.soul-benefit-modal{position:relative;margin:auto;align-items:center;max-width:calc(24rem + 12rem);border-style:solid;border-color:var(--soul-theme-color-neutral-200);border-width:1px;border-radius:0.25rem;background-color:hsl(0, 0%, 100%);box-shadow:0 1rem 2rem hsla(210, 24%, 16%, 0.08), 0 0.25rem 0.5rem hsla(210, 24%, 16%, 0.1)}.soul-benefit-modal::backdrop{background-color:hsla(0, 0%, 100%, 0.8)}@media only screen and (max-width: calc(24rem + 12rem)){.soul-benefit-modal{width:100vw;height:100vh;max-width:initial;max-height:100vh;margin:0}}.soul-benefit-modal__media{padding:0;line-height:0;font-size:0;width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center}.soul-benefit-modal__close{position:absolute;top:0.25rem;right:0.25rem}.soul-benefit-modal__header{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:2rem}.soul-benefit-modal__header-title{--_soul-heading-font-size:var(--soul-heading-h4-font-size);--_soul-heading-line-height:var(--soul-heading-h4-line-height);--_soul-heading-font-weight:var(--soul-heading-h4-font-weight);--_soul-heading-letter-spacing:var(--soul-heading-h4-letter-spacing);--soul-heading-color:var(--soul-theme-color-text-on-light);--soul-heading-h1-font-size:var(--soul-font-size-3-xl);--soul-heading-h1-line-height:var(--soul-line-height-3-xl);--soul-heading-h1-font-weight:500;--soul-heading-h2-font-size:var(--soul-font-size-2-xl);--soul-heading-h2-line-height:var(--soul-line-height-2-xl);--soul-heading-h2-font-weight:500;--soul-heading-h3-font-size:var(--soul-font-size-xl);--soul-heading-h3-line-height:var(--soul-line-height-xl);--soul-heading-h3-font-weight:500;--soul-heading-h4-font-size:var(--soul-font-size-l);--soul-heading-h4-line-height:var(--soul-line-height-l);--soul-heading-h4-font-weight:500;--soul-heading-h5-font-size:var(--soul-font-size-m);--soul-heading-h5-line-height:var(--soul-line-height-m);--soul-heading-h5-font-weight:450;--soul-heading-h6-font-size:var(--soul-font-size-xs);--soul-heading-h6-line-height:var(--soul-line-height-xs);--soul-heading-h6-font-weight:500;font-size:var(--_soul-heading-font-size);line-height:var(--_soul-heading-line-height);font-family:\"soul-sans\", \"Helvetica Neue\", Arial, sans-serif;font-weight:var(--_soul-heading-font-weight);color:var(--soul-heading-color);--soul-heading-h1-letter-spacing:-0.04em;--soul-heading-h2-letter-spacing:-0.04em;--soul-heading-h3-letter-spacing:-0.03em;--soul-heading-h4-letter-spacing:-0.02em;--soul-heading-h5-letter-spacing:0em;--soul-heading-h6-letter-spacing:0.03em;letter-spacing:var(--_soul-heading-letter-spacing)}.soul-benefit-modal__header-description{font-size:var(--soul-font-size-s);line-height:var(--soul-line-height-s);margin:0.5rem 0 0 0}.soul-benefit-modal__content{padding:2rem}.soul-benefit-modal__header,.soul-benefit-modal__buttons{padding-left:2rem;padding-right:2rem}.soul-benefit-modal__buttons{padding-bottom:2rem;width:100%}.soul-benefit-modal__buttons>.soul-button{width:100%}";

const SoulBenefitModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.soulClose = createEvent(this, "soulClose", 7);
    this.CLOSING_ANIMATION_CLASS = 'soul-benefit-modal--closing';
    this.open = false;
    this.closeWithEsc = true;
    this.closeButton = false;
    this.heading = undefined;
    this.description = undefined;
  }
  async show() {
    this.open = true;
  }
  async close() {
    this.open = false;
  }
  componentDidLoad() {
    this.addCancelListener();
    if (this.open) {
      this.dialog.showModal();
    }
  }
  render() {
    return (h("dialog", { class: "soul-benefit-modal", onClose: () => this.emitCloseEvent(), ref: el => this.dialog = el }, h("div", { class: "soul-grid soul-grid--vertical" }, this.closeButton ?
      h("div", { class: "soul-benefit-modal__close" }, h("button", { onClick: () => {
          this.close();
        }, class: "soul-button soul-button--default soul-button--compact soul-button--icon-only" }, h("span", { class: "soul-button__icon" }, h("span", { class: "a-icon a-icon--close" })))) :
      '', h("div", { class: "soul-benefit-modal__media soul-grid-item-auto-span" }, h("slot", { name: "media" })), isNotNull(this.heading) || isNotNull(this.description) ?
      h("header", { class: "soul-benefit-modal__header soul-grid-item-auto-span" }, isNotNull(this.heading) ?
        h("div", { class: "soul-benefit-modal__header-title" }, h("h1", { class: "soul-heading soul-heading--h4" }, this.heading)) :
        '', isNotNull(this.description) ?
        h("div", { class: "soul-benefit-modal__header-description" }, h("p", null, this.description)) :
        '') :
      '', h("section", { class: "soul-benefit-modal__content soul-grid-item-fill-span  h-y-auto-scroll" }, h("slot", { name: "content" })), h("footer", { class: "soul-benefit-modal__buttons  soul-grid-item-auto-span soul-button-group  soul-button-group--no-wrap" }, h("slot", { name: "buttons" })))));
  }
  toggleDialog() {
    var _a;
    this.open ? (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.showModal() : this.animateClose(); //TODO check as any. Typescript types error.
  }
  emitCloseEvent() {
    this.soulClose.emit();
  }
  addCancelListener() {
    this.dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      if (this.closeWithEsc) {
        this.close();
      }
    });
  }
  animateClose() {
    this.dialog.classList.add(this.CLOSING_ANIMATION_CLASS);
    this.dialog.addEventListener('animationend', () => {
      this.dialog.close();
      this.dialog.classList.remove(this.CLOSING_ANIMATION_CLASS);
    }, { once: true });
  }
  static get watchers() { return {
    "open": ["toggleDialog"]
  }; }
};
SoulBenefitModal.style = soulBenefitModalCss;

export { SoulBenefitModal as soul_benefit_modal };

//# sourceMappingURL=soul-benefit-modal.entry.js.map