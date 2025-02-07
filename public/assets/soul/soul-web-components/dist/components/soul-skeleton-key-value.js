import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './soul-skeleton-label2.js';
import { d as defineCustomElement$2 } from './soul-skeleton-text2.js';

const soulSkeletonKeyValueCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}@keyframes shimmer-slide{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host{display:block;width:100%;max-width:100%}.soul-skeleton-key-value{display:flex;flex-direction:column}.soul-skeleton-key-value--horizontal{flex-direction:row;gap:0.5rem}";

const SoulSkeletonKeyValue$1 = /*@__PURE__*/ proxyCustomElement(class SoulSkeletonKeyValue extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.horizontal = false;
    this.width = undefined;
    this.lines = 1;
  }
  render() {
    if (this.width) {
      this.hostElement.style.setProperty('width', this.width);
    }
    return (h(Host, null, h("div", { class: { 'soul-skeleton-key-value': true, 'soul-skeleton-key-value--horizontal': this.horizontal } }, h("soul-skeleton-label", { width: "40%" }), h("soul-skeleton-text", { lines: this.lines }))));
  }
  get hostElement() { return this; }
  static get style() { return soulSkeletonKeyValueCss; }
}, [1, "soul-skeleton-key-value", {
    "horizontal": [516],
    "width": [513],
    "lines": [514]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["soul-skeleton-key-value", "soul-skeleton-label", "soul-skeleton-text"];
  components.forEach(tagName => { switch (tagName) {
    case "soul-skeleton-key-value":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SoulSkeletonKeyValue$1);
      }
      break;
    case "soul-skeleton-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "soul-skeleton-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const SoulSkeletonKeyValue = SoulSkeletonKeyValue$1;
const defineCustomElement = defineCustomElement$1;

export { SoulSkeletonKeyValue, defineCustomElement };

//# sourceMappingURL=soul-skeleton-key-value.js.map