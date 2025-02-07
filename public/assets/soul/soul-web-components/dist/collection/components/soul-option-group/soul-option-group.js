import { h, Host } from '@stencil/core';
import { SelectHelper } from '../../services/SelectHelper';
export class SoulOptionGroup {
  constructor() {
    this.label = undefined;
    this.disabled = undefined;
    this.hidden = undefined;
  }
  componentWillLoad() {
    this.mutationObserver = new MutationObserver(() => {
      const areOptionsFiltered = this.optionsElement.assignedElements().every(option => option.hasAttribute(SelectHelper.FILTER_ATTRIBUTE));
      if (areOptionsFiltered) {
        this.hostElement.setAttribute(SelectHelper.FILTER_ATTRIBUTE, 'true');
      }
      else {
        this.hostElement.removeAttribute(SelectHelper.FILTER_ATTRIBUTE);
      }
    });
  }
  componentDidLoad() {
    this.onDisabledChanged();
    this.onHiddenChanged();
  }
  onDisabledChanged() {
    this.optionsElement.assignedElements().forEach(option => {
      this.disabled ? option.setAttribute(SelectHelper.GROUP_DISABLED_ATTRIBUTE, `${this.disabled}`) : option.removeAttribute(SelectHelper.GROUP_DISABLED_ATTRIBUTE);
    });
  }
  onHiddenChanged() {
    this.optionsElement.assignedElements().forEach(option => {
      this.hidden ? option.setAttribute(SelectHelper.GROUP_HIDDEN_ATTRIBUTE, `${this.hidden}`) : option.removeAttribute(SelectHelper.GROUP_HIDDEN_ATTRIBUTE);
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "soul-option-group" }, h("span", { class: "soul-option-group__label soul-label soul-label--strong" }, this.label), h("div", { class: "soul-option-group__options" }, h("slot", { ref: el => this.optionsElement = el, onSlotchange: this.onSlotChanged.bind(this) })))));
  }
  onSlotChanged() {
    this.mutationObserver.disconnect();
    this.optionsElement.assignedElements().forEach(option => {
      this.mutationObserver.observe(option, { attributes: true });
    });
  }
  static get is() { return "soul-option-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-option-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-option-group.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
        "attribute": "label",
        "reflect": true
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "disabled",
        "reflect": true
      },
      "hidden": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "hidden",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "onDisabledChanged"
      }, {
        "propName": "hidden",
        "methodName": "onHiddenChanged"
      }];
  }
}
//# sourceMappingURL=soul-option-group.js.map
