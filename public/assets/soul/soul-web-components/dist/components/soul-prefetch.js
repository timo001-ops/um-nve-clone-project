import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const soulPrefetchCss = ".soul-prefetch{display:none}";

const SoulPrefetch$1 = /*@__PURE__*/ proxyCustomElement(class SoulPrefetch extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fetchOnLoad = false;
    this.components = undefined;
    this.delay = undefined;
  }
  render() {
    return h("div", { class: "soul-prefetch", ref: el => this.container = el });
  }
  async componentDidLoad() {
    if (this.fetchOnLoad) {
      this.fetchComponents();
    }
  }
  async fetchComponents() {
    setTimeout(() => {
      const htmlElementsToRemove = [];
      this.components.forEach((component) => {
        const htmlElement = document.createElement(component);
        htmlElementsToRemove.push(htmlElement);
        this.container.appendChild(htmlElement);
      });
      setTimeout(() => {
        htmlElementsToRemove.forEach(el => el.remove());
      }, 50000);
    }, this.delay);
  }
  static get watchers() { return {
    "components": ["componentDidLoad"]
  }; }
  static get style() { return soulPrefetchCss; }
}, [1, "soul-prefetch", {
    "fetchOnLoad": [516, "fetch-on-load"],
    "components": [16],
    "delay": [514],
    "fetchComponents": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["soul-prefetch"];
  components.forEach(tagName => { switch (tagName) {
    case "soul-prefetch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SoulPrefetch$1);
      }
      break;
  } });
}
defineCustomElement$1();

const SoulPrefetch = SoulPrefetch$1;
const defineCustomElement = defineCustomElement$1;

export { SoulPrefetch, defineCustomElement };

//# sourceMappingURL=soul-prefetch.js.map