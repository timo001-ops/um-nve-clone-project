import { autoUpdate, computePosition, flip, offset, size } from '@floating-ui/dom';
import { isDefined } from '../utils/utils';
export class PopoverHelper {
  constructor() {
    this.popoverSupported = true;
    this.DISTANCE_REFERENCE_FLOATING = 4;
  }
  connect(reference, floating, maxHeight) {
    this.setPopoverSupport(floating);
    if (!this.popoverSupported && this.isPopoverInModal(floating)) {
      floating.classList.add('_popover-in-modal');
    }
    const callback = () => {
      computePosition(reference, floating, {
        strategy: 'fixed',
        placement: 'bottom',
        middleware: [
          offset(this.DISTANCE_REFERENCE_FLOATING),
          flip({
            fallbackPlacements: ['top', 'bottom'],
            fallbackStrategy: 'initialPlacement',
            boundary: document.body,
            padding: 5
          }),
          size({
            apply: ({ rects, elements, availableHeight }) => {
              Object.assign(elements.floating.style, {
                width: `${rects.reference.width}px`,
                maxHeight: `min(${availableHeight}px, ${maxHeight})`
              });
            },
            padding: 5,
            boundary: document.body
          })
        ]
      }).then((computedPosition) => {
        Object.assign(floating.style, {
          top: `${computedPosition.y}px`,
          left: `${computedPosition.x}px`
        });
      });
    };
    this.stopAutoUpdate = autoUpdate(reference, floating, callback);
  }
  disconnect() {
    this.stopAutoUpdate && this.stopAutoUpdate();
  }
  setPopoverSupport(element) {
    this.popoverSupported = this.isPopoverSupported(element);
  }
  isPopoverInModal(element) {
    return isDefined(this.getModalParent(element));
  }
  isPopoverSupported(element) {
    return ((typeof HTMLElement !== 'undefined' &&
      typeof HTMLElement.prototype === 'object' &&
      'popover' in HTMLElement.prototype) && (!element.classList.contains(':popover-open')));
  }
  getModalParent(reference) {
    return reference.getRootNode().host.closest('soul-modal');
  }
}
//# sourceMappingURL=PopoverHelper.js.map
