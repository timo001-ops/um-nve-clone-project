'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a33e737d.js');

const soulSkeletonKeyValueCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}@keyframes shimmer-slide{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host{display:block;width:100%;max-width:100%}.soul-skeleton-key-value{display:flex;flex-direction:column}.soul-skeleton-key-value--horizontal{flex-direction:row;gap:0.5rem}";

const SoulSkeletonKeyValue = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.horizontal = false;
    this.width = undefined;
    this.lines = 1;
  }
  render() {
    if (this.width) {
      this.hostElement.style.setProperty('width', this.width);
    }
    return (index.h(index.Host, null, index.h("div", { class: { 'soul-skeleton-key-value': true, 'soul-skeleton-key-value--horizontal': this.horizontal } }, index.h("soul-skeleton-label", { width: "40%" }), index.h("soul-skeleton-text", { lines: this.lines }))));
  }
  get hostElement() { return index.getElement(this); }
};
SoulSkeletonKeyValue.style = soulSkeletonKeyValueCss;

exports.soul_skeleton_key_value = SoulSkeletonKeyValue;

//# sourceMappingURL=soul-skeleton-key-value.cjs.entry.js.map