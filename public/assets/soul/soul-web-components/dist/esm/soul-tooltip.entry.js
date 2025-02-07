import { r as registerInstance, h, H as Host } from './index-b23b9bfc.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, h as hide } from './floating-ui.dom.esm-c048bbc6.js';
import { i as isDefined, e as isEmptyString } from './utils-934fcc35.js';

class TooltipHelper {
  constructor(reference, tooltip) {
    this.tooltipPosition = 'top-start';
    this.showTooltip = () => {
      var _a;
      if (this.reference.matches(':focus') || this.reference.matches(':hover')) {
        (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.showPopover();
      }
    };
    this.hideTooltip = () => {
      if (this.canHideTooltip()) {
        this.tooltip.hidePopover();
      }
    };
    this.reference = reference;
    this.tooltip = tooltip;
    this.addTriggerEventListeners();
  }
  connect() {
    if (!this.tooltip || !this.reference) {
      return;
    }
    this.tooltip.setAttribute('popover', 'manual');
    const updateCallback = () => {
      computePosition(this.reference, this.tooltip, {
        strategy: 'fixed',
        placement: this.tooltipPosition,
        middleware: [
          offset(1),
          flip({ elementContext: 'reference' }),
          flip({ boundary: document.body }),
          hide({ elementContext: 'reference' }),
        ]
      }).then(({ x, y, middlewareData }) => {
        if (middlewareData.hide) {
          Object.assign(this.tooltip.style, {
            visibility: middlewareData.hide.referenceHidden ? 'hidden' : 'visible'
          });
        }
        Object.assign(this.tooltip.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });
    };
    this.stopAutoUpdate = autoUpdate(this.reference, this.tooltip, updateCallback);
  }
  disconnect() {
    this.removeTriggerEventListeners();
    this.stopAutoUpdate && this.stopAutoUpdate();
  }
  setTooltipPosition(position) {
    this.tooltipPosition = position;
  }
  addTriggerEventListeners() {
    this.reference.addEventListener('mouseenter', this.showTooltip);
    this.reference.addEventListener('mouseleave', this.hideTooltip);
    this.reference.addEventListener('focus', this.showTooltip);
    this.reference.addEventListener('blur', this.hideTooltip);
  }
  removeTriggerEventListeners() {
    this.reference.removeEventListener('mouseenter', this.showTooltip);
    this.reference.removeEventListener('mouseleave', this.hideTooltip);
    this.reference.removeEventListener('focus', this.showTooltip);
    this.reference.removeEventListener('blur', this.hideTooltip);
  }
  canHideTooltip() {
    return !this.reference.matches(':focus') && !this.reference.matches(':hover');
  }
}

const soulTooltipCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}.soul-tooltip{position:fixed;padding:0.125rem 0.25rem;border-radius:0.25rem;margin:0;border:0;background-color:var(--soul-theme-color-neutral-800);color:hsl(0, 0%, 100%)}.soul-tooltip--hidden{visibility:hidden}:host([status=warning]) .soul-tooltip{background-color:hsl(42, 78%, 60%);color:var(--soul-theme-color-text-on-light)}:host([status=critical]) .soul-tooltip{background-color:hsl(0, 67%, 44%);color:hsl(0, 0%, 100%)}";

const SoulTooltipComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = 'top-start';
    this.status = undefined;
    this.triggerId = undefined;
    this.text = undefined;
    this.triggerElement = undefined;
  }
  disconnectedCallback() {
    var _a;
    (_a = this.tooltipHelper) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentDidLoad() {
    this.initializeTooltipHelper();
  }
  render() {
    return (h(Host, null, h("div", { class: { 'soul-tooltip': true, 'soul-tooltip--hidden': this.hideTooltip }, ref: el => this.tooltipElement = el, role: "tooltip" }, this.text)));
  }
  get hideTooltip() {
    return (!isDefined(this.triggerId) && !isDefined(this.triggerElement)) || (isEmptyString(this.text) || !isDefined(this.text));
  }
  initializeTooltipHelper() {
    var _a;
    const triggerElement = this.getTriggerElement();
    (_a = this.tooltipHelper) === null || _a === void 0 ? void 0 : _a.disconnect();
    if (isDefined(triggerElement)) {
      this.tooltipHelper = new TooltipHelper(triggerElement, this.tooltipElement);
      this.setTooltipPosition();
      this.tooltipHelper.connect();
      this.tooltipHelper.showTooltip();
    }
  }
  setTooltipPosition() {
    var _a;
    (_a = this.tooltipHelper) === null || _a === void 0 ? void 0 : _a.setTooltipPosition(this.position);
  }
  getTriggerElement() {
    return isDefined(this.triggerElement) ? this.triggerElement : document.getElementById(this.triggerId);
  }
  static get watchers() { return {
    "triggerId": ["initializeTooltipHelper"],
    "triggerElement": ["initializeTooltipHelper"],
    "position": ["setTooltipPosition"]
  }; }
};
SoulTooltipComponent.style = soulTooltipCss;

export { SoulTooltipComponent as soul_tooltip };

//# sourceMappingURL=soul-tooltip.entry.js.map