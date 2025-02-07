'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a33e737d.js');

const soulPrefetchCss = ".soul-prefetch{display:none}";

const SoulPrefetch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fetchOnLoad = false;
    this.components = undefined;
    this.delay = undefined;
  }
  render() {
    return index.h("div", { class: "soul-prefetch", ref: el => this.container = el });
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

exports.soul_prefetch = SoulPrefetch;

//# sourceMappingURL=soul-prefetch.cjs.entry.js.map