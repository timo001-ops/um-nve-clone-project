import { r as registerInstance, h } from './index-b23b9bfc.js';

const soulPrefetchCss = ".soul-prefetch{display:none}";

const SoulPrefetch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
SoulPrefetch.style = soulPrefetchCss;

export { SoulPrefetch as soul_prefetch };

//# sourceMappingURL=soul-prefetch.entry.js.map