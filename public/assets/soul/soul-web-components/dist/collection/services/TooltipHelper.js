import { autoUpdate, computePosition, flip, hide, offset } from '@floating-ui/dom';
export class TooltipHelper {
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
//# sourceMappingURL=TooltipHelper.js.map
