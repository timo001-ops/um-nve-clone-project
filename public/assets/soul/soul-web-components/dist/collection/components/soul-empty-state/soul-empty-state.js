import { h, Host } from '@stencil/core';
import { isNotEmpty } from '../../utils/utils';
export class SoulEmptyState {
  constructor() {
    this.supportedSizes = ['s', 'm'];
    this.heading = undefined;
    this.text = undefined;
    this.helpText = undefined;
    this.size = undefined;
  }
  hideEmptySlot(slot) {
    var _a, _b;
    slot.assignedNodes().length === 0 ?
      (_a = slot.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('h-hidden') :
      (_b = slot.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove('h-hidden');
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
    return (h(Host, null, h("div", { class: "soul-empty-state" }, h("div", { class: "soul-empty-state__illustration" }, h("slot", { name: "illustration" })), h("strong", { class: "soul-empty-state__heading" }, this.heading), isNotEmpty(this.text) ? h("p", { class: "soul-empty-state__text" }, this.text) : '', h("div", { class: "soul-empty-state__action h-hidden" }, h("slot", { name: "action", ref: el => this.actionSlot = el, onSlotchange: () => this.hideEmptySlot(this.actionSlot) })), h("div", { class: "soul-empty-state__additional-action h-hidden" }, h("slot", { name: "additional-action", ref: el => this.additionalActionSlot = el, onSlotchange: () => this.hideEmptySlot(this.additionalActionSlot) })), isNotEmpty(this.helpText) ? h("span", { class: "soul-empty-state__help-text" }, this.helpText) : '')));
  }
  static get is() { return "soul-empty-state"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-empty-state.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-empty-state.css"]
    };
  }
  static get properties() {
    return {
      "heading": {
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
        "attribute": "heading",
        "reflect": true
      },
      "text": {
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
        "attribute": "text",
        "reflect": true
      },
      "helpText": {
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
        "attribute": "help-text",
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
        "reflect": true
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "size",
        "methodName": "sizeChange"
      }];
  }
}
//# sourceMappingURL=soul-empty-state.js.map
