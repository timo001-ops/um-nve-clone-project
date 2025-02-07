import { h, Host } from '@stencil/core';
export class SoulSkeletonThumbnail {
  constructor() {
    this.supportedSizes = ['s', 'm', 'l', 'xl'];
    this.size = 'm';
    this.shape = 'square';
  }
  sizeChange(newValue) {
    this.validateSize(newValue);
  }
  validateSize(newValue) {
    if (!this.supportedSizes.includes(newValue)) {
      console.debug(`Size ${newValue} not supported. Supported sizes: ${this.supportedSizes.join(', ')}`);
    }
  }
  render() {
    return (h(Host, null, h("div", { class: `soul-skeleton-thumbnail ${this.shape === 'circle' ? 'soul-skeleton-thumbnail--circle' : 'soul-skeleton-thumbnail--square'}` })));
  }
  static get is() { return "soul-skeleton-thumbnail"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-skeleton-thumbnail.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-skeleton-thumbnail.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'s' | 'm' | 'l' | 'xl'",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'circle' | 'square'",
          "resolved": "\"circle\" | \"square\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "shape",
        "reflect": true,
        "defaultValue": "'square'"
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "size",
        "methodName": "sizeChange"
      }];
  }
}
//# sourceMappingURL=soul-skeleton-thumbnail.js.map
