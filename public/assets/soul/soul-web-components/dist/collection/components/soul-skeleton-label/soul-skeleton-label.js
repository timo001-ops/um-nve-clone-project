import { h, Host } from '@stencil/core';
export class SoulSkeletonLabel {
  constructor() {
    this.width = undefined;
  }
  render() {
    if (this.width) {
      this.hostElement.style.setProperty('width', this.width);
    }
    return (h(Host, null, h("div", { class: "soul-skeleton-label" })));
  }
  static get is() { return "soul-skeleton-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-skeleton-label.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-skeleton-label.css"]
    };
  }
  static get properties() {
    return {
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
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=soul-skeleton-label.js.map
