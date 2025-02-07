import { h, Host } from '@stencil/core';
export class SoulTableWrapper {
  constructor() {
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
  static get is() { return "soul-table-wrapper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-table-wrapper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-table-wrapper.css"]
    };
  }
  static get properties() {
    return {
      "xs": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xs",
        "reflect": true
      },
      "s": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "s",
        "reflect": true
      },
      "m": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "m",
        "reflect": true
      },
      "l": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "l",
        "reflect": true
      },
      "xl": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "xl",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "soulTableSizeChange",
        "name": "soulTableSizeChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "'xs' | 's' | 'm' | 'l' | 'xl'",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\"",
          "references": {}
        }
      }, {
        "method": "soulTableFullSize",
        "name": "soulTableFullSize",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "xs",
        "methodName": "onChange"
      }, {
        "propName": "s",
        "methodName": "onChange"
      }, {
        "propName": "m",
        "methodName": "onChange"
      }, {
        "propName": "l",
        "methodName": "onChange"
      }, {
        "propName": "xl",
        "methodName": "onChange"
      }];
  }
}
//# sourceMappingURL=soul-table-wrapper.js.map
