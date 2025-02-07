'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a33e737d.js');

const soulTableWrapperCss = ":host{display:block;position:relative;height:100%;overflow-y:auto}";

const SoulTableWrapper = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.soulTableSizeChange = index.createEvent(this, "soulTableSizeChange", 7);
    this.soulTableFullSize = index.createEvent(this, "soulTableFullSize", 7);
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
    return (index.h(index.Host, null, index.h("slot", { ref: el => this.tableSlot = el })));
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
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "xs": ["onChange"],
    "s": ["onChange"],
    "m": ["onChange"],
    "l": ["onChange"],
    "xl": ["onChange"]
  }; }
};
SoulTableWrapper.style = soulTableWrapperCss;

exports.soul_table_wrapper = SoulTableWrapper;

//# sourceMappingURL=soul-table-wrapper.cjs.entry.js.map