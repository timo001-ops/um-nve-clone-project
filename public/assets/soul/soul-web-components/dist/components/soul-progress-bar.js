import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { i as isDefined, a as isNotEmpty } from './utils.js';
import { P as ProgressHelper } from './ProgressHelper.js';
import { S as StatusHelper } from './StatusHelper.js';
import { d as defineCustomElement$2 } from './soul-indicator2.js';

const soulProgressBarCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}.h-anchor-container{position:relative}.h-anchor-to-container{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.h-bg-color--brand-base{background-color:var(--soul-theme-color-base)}.h-bg-color--brand-light{background-color:var(--soul-theme-color-primary-50)}.h-cursor-pointer{cursor:pointer}.h-cursor-default{cursor:default}.h-file-input-hidden{position:relative}.h-file-input-hidden input[type=file]{position:absolute;top:0;bottom:0;right:0;margin:0;opacity:0;direction:ltr;cursor:pointer;width:100%}.h-x-auto-scroll{overflow-x:auto}.h-y-auto-scroll{overflow-y:auto}.h-xy-auto-scroll{overflow:auto}.h-no-scroll{overflow:hidden}.h-shadow-s{box-shadow:0 0 0.5rem 0 hsla(210, 24%, 16%, 0.1)}.h-shadow-m{box-shadow:0 0 1rem 0 hsla(210, 24%, 16%, 0.1)}.h-shadow-dark-m{box-shadow:0 0 0.5rem 0 hsla(210, 24%, 16%, 0.5)}.h-show-on-top{z-index:8000}.h-hidden{display:none}.h-visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}.h-opacity{opacity:0.5}.soul-font-size-2-xs{font-size:var(--soul-font-size-2-xs);line-height:var(--soul-line-height-2-xs)}.soul-font-size-xs{font-size:var(--soul-font-size-xs);line-height:var(--soul-line-height-xs)}.soul-font-size-s{font-size:var(--soul-font-size-s);line-height:var(--soul-line-height-s)}.soul-font-size-m{font-size:var(--soul-font-size-m);line-height:var(--soul-line-height-m)}.soul-font-size-l{font-size:var(--soul-font-size-l);line-height:var(--soul-line-height-l)}.soul-font-size-xl{font-size:var(--soul-font-size-xl);line-height:var(--soul-line-height-xl)}.soul-font-size-2-xl{font-size:var(--soul-font-size-2-xl);line-height:var(--soul-line-height-2-xl)}.soul-font-size-3-xl{font-size:var(--soul-font-size-3-xl);line-height:var(--soul-line-height-3-xl)}.h-capitalize{text-transform:capitalize}.h-text-uppercase{text-transform:uppercase}.h-tx-color--brand-base{color:var(--soul-theme-color-base)}.h-tx-color--brand-light{color:var(--soul-theme-color-primary-50)}.h-truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.h-text-align-center{text-align:center}.h-text-align-right{text-align:right}.h-text-align-left{text-align:left}.h-veil{position:fixed;top:0;left:0;height:100vh;width:100vw}.h-veil--light{background-color:hsla(0, 0%, 100%, 0.8)}.soul-label{display:block;font-size:var(--soul-font-size-s);line-height:var(--soul-line-height-s);transition-property:color;transition-duration:300ms;transition-timing-function:ease;color:var(--soul-theme-color-text-on-light)}.soul-label--inline{display:inline-block}.soul-label--input{font-family:\"soul-sans\", \"Helvetica Neue\", Arial, sans-serif;font-weight:450;font-style:normal}.soul-label--reduced{color:var(--soul-theme-color-neutral-500)}.soul-label--key{font-family:\"soul-sans\", \"Helvetica Neue\", Arial, sans-serif;font-weight:320;font-style:normal;color:var(--soul-theme-color-neutral-500)}.soul-label--stat{font-size:var(--soul-font-size-l);line-height:var(--soul-line-height-l)}.soul-label--strong{font-family:\"soul-sans\", \"Helvetica Neue\", Arial, sans-serif;font-weight:500;font-style:normal;color:var(--soul-theme-color-text-bold-on-light)}.soul-label--mono{font-family:\"soul-mono\", \"Menlo\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", Courier, monospace}.soul-label--micro{font-size:var(--soul-font-size-xs);line-height:var(--soul-line-height-xs)}.soul-label--warning{color:hsl(43, 77%, 27%)}.soul-label--negative{color:hsl(0, 72%, 38%)}.soul-label--positive{color:hsl(125, 56%, 29%)}.soul-label--data-type{font-family:\"soul-mono\", \"Menlo\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", Courier, monospace;color:hsl(262, 48%, 46%);font-size:var(--soul-font-size-xs);line-height:var(--soul-line-height-xs)}.soul-sign{display:flex;align-items:center}.soul-sign--inline{display:inline-flex}.soul-sign--comfortable>.soul-sign__text{padding:0 0 0 1rem}.soul-sign--regular>.soul-sign__text{padding:0 0 0 0.5rem}.soul-sign--compact>.soul-sign__text{padding:0 0 0 0.125rem}.soul-sign--rev{flex-direction:row-reverse;justify-content:flex-end}.soul-sign--rev.soul-sign--compact>.soul-sign__text{padding:0 0.125rem 0 0}.soul-sign--rev.soul-sign--regular>.soul-sign__text{padding:0 0.5rem 0 0}.soul-sign--rev.soul-sign--comfortable>.soul-sign__text{padding:0 1rem 0 0}.soul-progress-bar{display:block;width:100%}.soul-progress-bar__track,.soul-progress-bar__fill{display:block;height:0.25rem;border-radius:0.25rem}.soul-progress-bar__track{background-color:var(--soul-theme-color-neutral-200)}.soul-progress-bar__fill{background-color:var(--soul-progress-bar-fill-color, var(--soul-theme-color-neutral-600));max-width:100%}.soul-progress-bar__content{padding:0.125rem 0 0 0;color:var(--soul-theme-color-neutral-500)}.soul-progress-bar--warning{--soul-progress-bar-fill-color:hsl(42, 78%, 60%)}.soul-progress-bar--critical{--soul-progress-bar-fill-color:hsl(0, 67%, 44%)}.soul-progress-bar--positive{--soul-progress-bar-fill-color:hsl(122, 39%, 41%)}.soul-progress-bar--determinate .soul-progress-bar__fill{transition-property:width;transition-duration:300ms;transition-timing-function:ease}@keyframes _indeterminate{0%{left:-50%}100%{left:100%}}.soul-progress-bar--indeterminate .soul-progress-bar__track{position:relative;overflow:hidden}.soul-progress-bar--indeterminate .soul-progress-bar__fill{position:absolute;top:0;min-width:50%;max-width:50%;animation-name:_indeterminate;animation-duration:1.5s;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-play-state:running}:host{display:block;width:100%}:host,:host([color=neutral]){--soul-progress-bar-fill-color:var(--soul-theme-color-neutral-600)}:host([color=primary]){--soul-progress-bar-fill-color:var(--soul-theme-color-background-interactive-primary-normal)}.soul-progress-bar__content{overflow:hidden}.soul-progress-bar--warning{--soul-progress-bar-fill-color:hsl(42, 78%, 60%)}.soul-progress-bar--critical{--soul-progress-bar-fill-color:hsl(0, 67%, 44%)}.soul-progress-bar--positive{--soul-progress-bar-fill-color:hsl(122, 39%, 41%)}";

const SoulProgressBar$1 = /*@__PURE__*/ proxyCustomElement(class SoulProgressBar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.supportedStatuses = ['positive', 'warning', 'critical'];
    this.progressHelper = new ProgressHelper();
    this.statusHelper = new StatusHelper();
    this.range = { min: 0, max: 100 };
    this.label = undefined;
    this.progress = undefined;
    this.min = 0;
    this.max = 100;
    this.hideLabel = false;
    this.indeterminate = false;
    this.status = undefined;
    this.color = 'neutral';
  }
  componentWillLoad() {
    this.range = this.progressHelper.getRange(this.min, this.max);
  }
  rangeValueChange() {
    this.range = this.progressHelper.getRange(this.min, this.max);
  }
  statusChange(newValue) {
    this.statusHelper.validateStatus(this.supportedStatuses, newValue);
  }
  render() {
    const progressPercentage = this.progressHelper.getProgressPercentage(this.range, this.progress);
    const label = this.progressHelper.getLabel(this.label, this.indeterminate, progressPercentage);
    return (h(Host, { role: "progressbar", "aria-valuemin": this.range.min, "aria-valuemax": this.range.max, "aria-valuenow": this.progress, "aria-label": label, title: this.hideLabel ? label : '' }, h("div", { class: {
        'soul-progress-bar soul-progress-bar--default': true,
        [this.indeterminate ? 'soul-progress-bar--indeterminate' : 'soul-progress-bar--determinate']: true,
        'soul-progress-bar--critical': this.status === 'critical',
        'soul-progress-bar--warning': this.status === 'warning',
        'soul-progress-bar--positive': this.status === 'positive'
      } }, h("div", { class: "soul-progress-bar__track" }, h("div", { class: "soul-progress-bar__fill", style: { width: `${progressPercentage}%` } })), this.hasLabel(label) ?
      h("div", { class: "soul-progress-bar__content" }, isDefined(this.status) && this.statusHelper.isValidStatus(this.supportedStatuses, this.status) ?
        h("div", { class: "soul-sign  soul-sign--regular soul-sign--inline" }, h("span", { class: "soul-sign__icon" }, h("soul-indicator", { size: "s", type: this.status })), h("span", { class: "soul-sign__text" }, h("span", { class: {
            'soul-label soul-label--reduced h-truncate': true,
            'soul-label--negative': this.status === 'critical',
            'soul-label--warning': this.status === 'warning',
            'soul-label--positive': this.status === 'positive'
          } }, label))) :
        h("span", { class: "soul-label soul-label--reduced h-truncate" }, label)) : '')));
  }
  hasLabel(label) {
    return !this.hideLabel && isNotEmpty(label);
  }
  static get watchers() { return {
    "min": ["rangeValueChange"],
    "max": ["rangeValueChange"],
    "status": ["statusChange"]
  }; }
  static get style() { return soulProgressBarCss; }
}, [1, "soul-progress-bar", {
    "label": [513],
    "progress": [514],
    "min": [514],
    "max": [514],
    "hideLabel": [516, "hide-label"],
    "indeterminate": [516],
    "status": [513],
    "color": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["soul-progress-bar", "soul-indicator"];
  components.forEach(tagName => { switch (tagName) {
    case "soul-progress-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SoulProgressBar$1);
      }
      break;
    case "soul-indicator":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const SoulProgressBar = SoulProgressBar$1;
const defineCustomElement = defineCustomElement$1;

export { SoulProgressBar, defineCustomElement };

//# sourceMappingURL=soul-progress-bar.js.map