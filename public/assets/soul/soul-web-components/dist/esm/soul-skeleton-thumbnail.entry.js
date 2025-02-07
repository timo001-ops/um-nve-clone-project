import { r as registerInstance, h, H as Host, g as getElement } from './index-b23b9bfc.js';

const soulSkeletonThumbnailCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}@keyframes shimmer-slide{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host{--_soul-thumbnail-size:2rem;display:block;width:var(--_soul-thumbnail-size);height:var(--_soul-thumbnail-size)}:host([size=s]){--_soul-thumbnail-size:1rem}:host([size=m]){--_soul-thumbnail-size:2rem}:host([size=l]){--_soul-thumbnail-size:3rem}:host([size=xl]){--_soul-thumbnail-size:6rem}.soul-skeleton-thumbnail{display:block;width:100%;border-radius:0.25rem;margin:0.25rem 0 0.25rem 0;height:0.5rem;width:100%;height:100%;background-color:var(--soul-theme-color-neutral-300)}.soul-skeleton-thumbnail--square{border-radius:0.25rem}.soul-skeleton-thumbnail--circle{border-radius:50%}@media screen and (prefers-reduced-motion: no-preference){.soul-skeleton-thumbnail{position:relative;overflow:hidden}.soul-skeleton-thumbnail:before{content:var(--soul-skeleton-animation, \"\");position:absolute;width:100%;top:0;bottom:0;background-image:linear-gradient(to right, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0.5) 33%, hsla(0, 0%, 100%, 0.5) 66%, hsla(0, 0%, 100%, 0) 100%);animation-name:shimmer-slide;animation-duration:1s;animation-timing-function:ease-out;animation-iteration-count:infinite;animation-fill-mode:both}}";

const SoulSkeletonThumbnail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.supportedSizes = ['s', 'm', 'l', 'xl'];
    this.size = 'm';
    this.shape = 'square';
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
    return (h(Host, null, h("div", { class: `soul-skeleton-thumbnail ${this.shape === 'circle' ? 'soul-skeleton-thumbnail--circle' : 'soul-skeleton-thumbnail--square'}` })));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "size": ["sizeChange"]
  }; }
};
SoulSkeletonThumbnail.style = soulSkeletonThumbnailCss;

export { SoulSkeletonThumbnail as soul_skeleton_thumbnail };

//# sourceMappingURL=soul-skeleton-thumbnail.entry.js.map