import { h, Host } from '@stencil/core';
export class SoulSkeletonText {
  constructor() {
    this.defaultLinesNumber = 3;
    this.lines = this.defaultLinesNumber;
    this.width = undefined;
  }
  getLines() {
    return this.lines < 0 ? this.defaultLinesNumber : this.lines;
  }
  render() {
    if (this.width) {
      this.hostElement.style.setProperty('width', this.width);
    }
    const lineElements = [...Array(this.getLines())].map(() => h("div", { class: "soul-skeleton-text__line" }));
    return (h(Host, null, h("div", { class: "soul-skeleton-text" }, lineElements)));
  }
  static get is() { return "soul-skeleton-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-skeleton-text.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-skeleton-text.css"]
    };
  }
  static get properties() {
    return {
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
        "defaultValue": "this.defaultLinesNumber"
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
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=soul-skeleton-text.js.map
