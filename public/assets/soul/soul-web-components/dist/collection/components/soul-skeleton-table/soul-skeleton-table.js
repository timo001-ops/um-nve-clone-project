import { h, Host } from '@stencil/core';
export class SoulSkeletonTable {
  constructor() {
    this.defaultRowsNumber = 3;
    this.defaultColumnsNumber = 2;
    this.withHeader = true;
    this.rows = this.defaultRowsNumber;
    this.columns = this.defaultColumnsNumber;
  }
  getColumns() {
    return this.columns < 0 ? this.defaultColumnsNumber : this.columns;
  }
  getRows() {
    return this.rows < 0 ? this.defaultRowsNumber : this.rows;
  }
  render() {
    return (h(Host, null, h("table", { class: "soul-table" }, this.withHeader ?
      h("thead", null, h("tr", null, [...Array(this.getColumns())].map(() => h("th", { class: "soul-table-cell" }, h("soul-skeleton-label", null))))) : '', h("tbody", null, [...Array(this.getRows())].map(() => h("tr", { class: "soul-table-row" }, [...Array(this.getColumns())].map(() => h("td", { class: "soul-table-cell" }, h("soul-skeleton-text", { lines: 1 })))))))));
  }
  static get is() { return "soul-skeleton-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-skeleton-table.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-skeleton-table.css"]
    };
  }
  static get properties() {
    return {
      "withHeader": {
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
        "attribute": "with-header",
        "reflect": true,
        "defaultValue": "true"
      },
      "rows": {
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
        "attribute": "rows",
        "reflect": true,
        "defaultValue": "this.defaultRowsNumber"
      },
      "columns": {
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
        "attribute": "columns",
        "reflect": true,
        "defaultValue": "this.defaultColumnsNumber"
      }
    };
  }
}
//# sourceMappingURL=soul-skeleton-table.js.map
