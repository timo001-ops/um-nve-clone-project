import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const soulSkeletonTextCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}@keyframes shimmer-slide{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host{display:block;width:100%;max-width:100%}.soul-skeleton-text__line{display:block;width:100%;border-radius:0.25rem;margin:0.25rem 0 0.25rem 0;height:0.5rem;background-color:var(--soul-theme-color-neutral-200)}.soul-skeleton-text__line+.soul-skeleton-text__line{margin:0.5rem 0 0 0}.soul-skeleton-text__line+.soul-skeleton-text__line:last-of-type{width:80%}@media screen and (prefers-reduced-motion: no-preference){.soul-skeleton-text__line{position:relative;overflow:hidden}.soul-skeleton-text__line:before{content:var(--soul-skeleton-animation, \"\");position:absolute;width:100%;top:0;bottom:0;background-image:linear-gradient(to right, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0.5) 33%, hsla(0, 0%, 100%, 0.5) 66%, hsla(0, 0%, 100%, 0) 100%);animation-name:shimmer-slide;animation-duration:1s;animation-timing-function:ease-out;animation-iteration-count:infinite;animation-fill-mode:both}}";

const SoulSkeletonText = /*@__PURE__*/ proxyCustomElement(class SoulSkeletonText extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.defaultLinesNumber = 3;
    this.lines = this.defaultLinesNumber;
    this.width = undefined;
  }
  getLines() {
    return this.lines < 0 ? this.defaultLinesNumber : this.lines;
  }
  render() {
    if (this.width) {
      this.hostElement.style.setProperty('width', this.width);
    }
    const lineElements = [...Array(this.getLines())].map(() => h("div", { class: "soul-skeleton-text__line" }));
    return (h(Host, null, h("div", { class: "soul-skeleton-text" }, lineElements)));
  }
  get hostElement() { return this; }
  static get style() { return soulSkeletonTextCss; }
}, [1, "soul-skeleton-text", {
    "lines": [514],
    "width": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["soul-skeleton-text"];
  components.forEach(tagName => { switch (tagName) {
    case "soul-skeleton-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SoulSkeletonText);
      }
      break;
  } });
}
defineCustomElement();

export { SoulSkeletonText as S, defineCustomElement as d };

//# sourceMappingURL=soul-skeleton-text2.js.map