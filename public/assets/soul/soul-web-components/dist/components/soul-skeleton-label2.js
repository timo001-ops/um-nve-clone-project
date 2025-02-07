import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const soulSkeletonLabelCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}@keyframes shimmer-slide{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host{display:block;width:100%;max-width:100%}.soul-skeleton-label{display:block;width:100%;border-radius:0.25rem;margin:0.25rem 0 0.25rem 0;height:0.5rem;background-color:var(--soul-theme-color-neutral-300)}@media screen and (prefers-reduced-motion: no-preference){.soul-skeleton-label{position:relative;overflow:hidden}.soul-skeleton-label:before{content:var(--soul-skeleton-animation, \"\");position:absolute;width:100%;top:0;bottom:0;background-image:linear-gradient(to right, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0.5) 33%, hsla(0, 0%, 100%, 0.5) 66%, hsla(0, 0%, 100%, 0) 100%);animation-name:shimmer-slide;animation-duration:1s;animation-timing-function:ease-out;animation-iteration-count:infinite;animation-fill-mode:both}}";

const SoulSkeletonLabel = /*@__PURE__*/ proxyCustomElement(class SoulSkeletonLabel extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.width = undefined;
  }
  render() {
    if (this.width) {
      this.hostElement.style.setProperty('width', this.width);
    }
    return (h(Host, null, h("div", { class: "soul-skeleton-label" })));
  }
  get hostElement() { return this; }
  static get style() { return soulSkeletonLabelCss; }
}, [1, "soul-skeleton-label", {
    "width": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["soul-skeleton-label"];
  components.forEach(tagName => { switch (tagName) {
    case "soul-skeleton-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SoulSkeletonLabel);
      }
      break;
  } });
}
defineCustomElement();

export { SoulSkeletonLabel as S, defineCustomElement as d };

//# sourceMappingURL=soul-skeleton-label2.js.map