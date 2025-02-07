class OptionHelper {
  constructor(onSelectedChange, slots) {
    this.onSelectedChange = onSelectedChange;
    this.slots = slots;
    this.slotObserver = new MutationObserver(onSelectedChange);
  }
  cloneSlotsContent() {
    return this.slots.reduce((previousValue, currentSlot) => {
      return previousValue.concat(currentSlot.assignedElements().map(elementToClone => {
        const clonedNode = elementToClone.cloneNode(true);
        clonedNode.setAttribute('slot', currentSlot.name);
        return clonedNode;
      }));
    }, []);
  }
  onSelectChange(selected) {
    this.slotObserver.disconnect();
    this.slots.forEach(slot => {
      slot === null || slot === void 0 ? void 0 : slot.removeEventListener('slotchange', this.onSlotChange.bind(this));
      slot === null || slot === void 0 ? void 0 : slot.removeEventListener('slotchange', this.onSelectedChange);
    });
    if (selected) {
      this.observeSlotElements();
      this.slots.forEach(slot => {
        slot === null || slot === void 0 ? void 0 : slot.addEventListener('slotchange', this.onSlotChange.bind(this));
        slot === null || slot === void 0 ? void 0 : slot.addEventListener('slotchange', this.onSelectedChange);
      });
    }
  }
  disconnect() {
    this.slotObserver.disconnect();
  }
  observeSlotElements() {
    this.slots.forEach(slot => slot.assignedElements()
      .forEach((slottedElement) => this.slotObserver.observe(slottedElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    })));
  }
  onSlotChange() {
    this.slotObserver.disconnect();
    this.observeSlotElements();
  }
}

function throttle(throttledFunction, delay) {
  let isThrottling = false;
  return function (...args) {
    if (!isThrottling) {
      throttledFunction(...args);
      isThrottling = true;
      setTimeout(function () {
        isThrottling = false;
      }, delay);
    }
  };
}

export { OptionHelper as O, throttle as t };

//# sourceMappingURL=Throttle.js.map