import { h, Host } from '@stencil/core';
export class SoulSkeletonKeyValue {
  constructor() {
    this.horizontal = false;
    this.width = undefined;
    this.lines = 1;
  }
  render() {
    if (this.width) {
      this.hostElement.style.setProperty('width', this.width);
    }
    return (h(Host, null, h("div", { class: { 'soul-skeleton-key-value': true, 'soul-skeleton-key-value--horizontal': this.horizontal } }, h("soul-skeleton-label", { width: "40%" }), h("soul-skeleton-text", { lines: this.lines }))));
  }
  static get is() { return "soul-skeleton-key-value"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-skeleton-key-value.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-skeleton-key-value.css"]
    };
  }
  static get properties() {
    return {
      "horizontal": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "horizontal",
        "reflect": true,
        "defaultValue": "false"
      },
      "width": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "width",
        "reflect": true
      },
      "lines": {
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
        "attribute": "lines",
        "reflect": true,
        "defaultValue": "1"
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=soul-skeleton-key-value.js.map
