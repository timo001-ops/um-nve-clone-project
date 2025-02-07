import { h, Host } from '@stencil/core';
import { SizeHelper } from '../../services/SizeHelper';
export class SoulIndicator {
  constructor() {
    this.sizeHelper = new SizeHelper();
    this.supportedSizes = ['s', 'm', 'l'];
    this.type = undefined;
    this.size = 's';
    this.inline = false;
    this.border = false;
  }
  sizeChange(newValue) {
    this.sizeHelper.validateSize(this.supportedSizes, newValue);
  }
  render() {
    return (h(Host, null, h("span", { class: `soul-indicator soul-indicator--${this.type} ${this.border ? 'soul-indicator--with-border' : ''}` })));
  }
  static get is() { return "soul-indicator"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-indicator.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-indicator.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'positive' | 'warning' | 'not-allowed' | 'critical' | 'info' | 'help' | 'waiting' | 'locked' | 'experimental'",
          "resolved": "\"critical\" | \"experimental\" | \"help\" | \"info\" | \"locked\" | \"not-allowed\" | \"positive\" | \"waiting\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": true
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'s' | 'm'",
          "resolved": "\"m\" | \"s\"",
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
        "defaultValue": "'s'"
      },
      "inline": {
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
        "attribute": "inline",
        "reflect": true,
        "defaultValue": "false"
      },
      "border": {
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
        "attribute": "border",
        "reflect": true,
        "defaultValue": "false"
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
//# sourceMappingURL=soul-indicator.js.map
