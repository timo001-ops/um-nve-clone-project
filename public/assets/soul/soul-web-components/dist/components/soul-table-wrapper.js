import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const soulTableWrapperCss = ":host{display:block;position:relative;height:100%;overflow-y:auto}";

const SoulTableWrapper$1 = /*@__PURE__*/ proxyCustomElement(class SoulTableWrapper extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.soulTableSizeChange = createEvent(this, "soulTableSizeChange", 7);
    this.soulTableFullSize = createEvent(this, "soulTableFullSize", 7);
    this.breakpoints = [];
    this.xs = undefined;
    this.s = undefined;
    this.m = undefined;
    this.l = undefined;
    this.xl = undefined;
  }
  componentDidLoad() {
    this.setBreakpoints();
    this.resizeObserver = new ResizeObserver((entries) => this.checkSize(entries[0].contentRect.width));
    this.resizeObserver.observe(this.hostElement);
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }
  onChange() {
    this.setBreakpoints();
    this.checkSize(this.hostElement.clientWidth);
  }
  render() {
    return (h(Host, null, h("slot", { ref: el => this.tableSlot = el })));
  }
  setBreakpoints() {
    const breakpointsKeys = this.getBreakpointsKeys();
    this.breakpoints = this.buildDescendingOrderBreakpoints(breakpointsKeys);
  }
  buildDescendingOrderBreakpoints(breakpointKeys) {
    return [this.xs, this.s, this.m, this.l, this.xl]
      .map((width, index) => ({ size: breakpointKeys[index], width }))
      .filter(size => !Number.isNaN(size.width))
      .reverse();
  }
  checkSize(width) {
    const newSize = this.breakpoints
      .reduce((currentSize, breakpoint) => (width <= breakpoint.width) ? breakpoint.size : currentSize, 'full');
    this.updateSizeClass(newSize);
  }
  updateSizeClass(newSize) {
    if (newSize !== this.currentSize) {
      this.removeSizeClass(this.currentSize);
      this.currentSize = newSize;
      if (this.isBreakpointKey(newSize)) {
        this.addSizeClass(newSize);
        this.soulTableSizeChange.emit(newSize);
      }
      else {
        this.soulTableFullSize.emit();
      }
    }
  }
  addSizeClass(toAdd) {
    this.tableSlot.assignedElements().forEach(slotted => slotted.classList.add(this.getClassForSize(toAdd)));
  }
  removeSizeClass(toRemove) {
    if (this.isBreakpointKey(toRemove)) {
      this.tableSlot.assignedElements().forEach(slotted => slotted.classList.remove(this.getClassForSize(toRemove)));
    }
  }
  getBreakpointsKeys() {
    return ['xs', 's', 'm', 'l', 'xl'];
  }
  getClassForSize(breakpointKey) {
    return 'soul-table--' + breakpointKey;
  }
  isBreakpointKey(newSize) {
    return this.getBreakpointsKeys().some(key => key === newSize);
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "xs": ["onChange"],
    "s": ["onChange"],
    "m": ["onChange"],
    "l": ["onChange"],
    "xl": ["onChange"]
  }; }
  static get style() { return soulTableWrapperCss; }
}, [1, "soul-table-wrapper", {
    "xs": [514],
    "s": [514],
    "m": [514],
    "l": [514],
    "xl": [514]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["soul-table-wrapper"];
  components.forEach(tagName => { switch (tagName) {
    case "soul-table-wrapper":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SoulTableWrapper$1);
      }
      break;
  } });
}
defineCustomElement$1();

const SoulTableWrapper = SoulTableWrapper$1;
const defineCustomElement = defineCustomElement$1;

export { SoulTableWrapper, defineCustomElement };

//# sourceMappingURL=soul-table-wrapper.js.map