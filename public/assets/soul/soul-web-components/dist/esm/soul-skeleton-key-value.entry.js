import { r as registerInstance, h, H as Host, g as getElement } from './index-b23b9bfc.js';

const soulSkeletonKeyValueCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}@keyframes shimmer-slide{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host{display:block;width:100%;max-width:100%}.soul-skeleton-key-value{display:flex;flex-direction:column}.soul-skeleton-key-value--horizontal{flex-direction:row;gap:0.5rem}";

const SoulSkeletonKeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get hostElement() { return getElement(this); }
};
SoulSkeletonKeyValue.style = soulSkeletonKeyValueCss;

export { SoulSkeletonKeyValue as soul_skeleton_key_value };

//# sourceMappingURL=soul-skeleton-key-value.entry.js.map