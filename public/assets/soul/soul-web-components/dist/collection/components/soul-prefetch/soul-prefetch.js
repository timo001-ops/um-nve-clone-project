import { h } from '@stencil/core';
export class SoulPrefetch {
  constructor() {
    this.fetchOnLoad = false;
    this.components = undefined;
    this.delay = undefined;
  }
  render() {
    return h("div", { class: "soul-prefetch", ref: el => this.container = el });
  }
  async componentDidLoad() {
    if (this.fetchOnLoad) {
      this.fetchComponents();
    }
  }
  async fetchComponents() {
    setTimeout(() => {
      const htmlElementsToRemove = [];
      this.components.forEach((component) => {
        const htmlElement = document.createElement(component);
        htmlElementsToRemove.push(htmlElement);
        this.container.appendChild(htmlElement);
      });
      setTimeout(() => {
        htmlElementsToRemove.forEach(el => el.remove());
      }, 50000);
    }, this.delay);
  }
  static get is() { return "soul-prefetch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-prefetch.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-prefetch.css"]
    };
  }
  static get properties() {
    return {
      "fetchOnLoad": {
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
        "attribute": "fetch-on-load",
        "reflect": true,
        "defaultValue": "false"
      },
      "components": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "delay": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "0",
          "resolved": "0",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "delay",
        "reflect": true
      }
    };
  }
  static get methods() {
    return {
      "fetchComponents": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "components",
        "methodName": "componentDidLoad"
      }];
  }
}
//# sourceMappingURL=soul-prefetch.js.map
