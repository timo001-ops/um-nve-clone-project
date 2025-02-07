import { h, Host } from '@stencil/core';
import { OptionHelper } from '../../services/OptionHelper';
import { throttle } from '../../utils/Throttle';
import { isNotEmpty } from '../../utils/utils';
import { SelectHelper } from '../../services/SelectHelper';
export class SoulTextOption {
  constructor() {
    this.additionalText = undefined;
    this.disabled = false;
    this.hidden = false;
    this.highlighted = false;
    this.passive = false;
    this.selected = false;
    this.dataSelected = false;
    this.text = undefined;
    this.nonFilterable = false;
    this.instanceId = `js-soul-text-option-${++textOptionId}`;
    this.value = undefined;
  }
  componentDidLoad() {
    this.optionHelper = new OptionHelper(this.onChange.bind(this), [this.infoSlot, this.iconSlot]);
    if (this.selected) {
      this.onSelectedChange();
    }
    this.onChange(); // Needed when option has no slotted content
  }
  componentDidRender() {
    this.setIconSlotVisibility();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.optionHelper) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  async clone() {
    const clonedElement = document.createElement('soul-text-option');
    clonedElement.text = this.text;
    clonedElement.additionalText = this.additionalText;
    clonedElement.passive = true;
    const clonedSlotContents = this.optionHelper.cloneSlotsContent();
    clonedElement.append(...clonedSlotContents);
    return Promise.resolve(clonedElement);
  }
  async match(term) {
    var _a, _b;
    return ((_a = this.text) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(term.toLowerCase())) || ((_b = this.additionalText) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(term.toLowerCase()));
  }
  onChange() {
    if (this.optionHelper && this.dataSelected && !this.passive) {
      this.soulOptionChange.emit(this);
    }
  }
  onSelectedChange() {
    if (this.optionHelper && !this.passive) {
      this.dataSelected = this.selected;
      this.optionHelper.onSelectChange(this.selected);
      this.soulOptionSelectChange.emit(this);
    }
  }
  render() {
    return (h(Host, { ref: el => this.hostElement = el }, h("div", { class: "soul-text-option", onMouseMove: throttle(this.onMouseMove.bind(this), 1000), onMouseDown: (event) => this.onMouseDown(event), ref: el => this.textOptionElement = el }, h("div", { class: "soul-grid soul-grid--horizontal soul-grid--align-center soul-grid--compact-gap" }, h("div", { class: "soul-grid-item-auto-span  soul-text-option__icon" }, h("slot", { ref: el => this.iconSlot = el, name: "icon", onSlotchange: this.setIconSlotVisibility.bind(this) })), h("div", { class: "soul-grid-item-fill-span" }, isNotEmpty(this.text) ? h("span", { class: "soul-label h-truncate" }, this.text) : '', isNotEmpty(this.additionalText) ? h("span", { class: "soul-label soul-label--reduced soul-label--micro h-truncate" }, this.additionalText) : ''), h("div", { class: "soul-grid-item-auto-span" }, h("slot", { ref: el => this.infoSlot = el, name: "info" }))))));
  }
  onMouseMove() {
    if (!this.passive && !this.isOptionDisabled()) {
      this.soulOptionHover.emit(this);
    }
  }
  onMouseDown(event) {
    if (!this.passive) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.isOptionDisabled()) {
        this.soulOptionClick.emit(this);
      }
    }
  }
  isOptionDisabled() {
    return this.disabled || this.hostElement.hasAttribute(SelectHelper.GROUP_DISABLED_ATTRIBUTE);
  }
  setIconSlotVisibility() {
    if (this.iconSlot.assignedElements().length > 0) {
      this.textOptionElement.style.setProperty('--soul-text-option-icon-display', 'flex');
    }
    else {
      this.textOptionElement.style.setProperty('--soul-text-option-icon-display', 'none');
    }
  }
  static get is() { return "soul-text-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-text-option.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-text-option.css"]
    };
  }
  static get properties() {
    return {
      "additionalText": {
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
        "attribute": "additional-text",
        "reflect": true
      },
      "disabled": {
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
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "hidden": {
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
        "attribute": "hidden",
        "reflect": true,
        "defaultValue": "false"
      },
      "highlighted": {
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
        "attribute": "highlighted",
        "reflect": true,
        "defaultValue": "false"
      },
      "passive": {
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
        "attribute": "passive",
        "reflect": true,
        "defaultValue": "false"
      },
      "selected": {
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
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
      },
      "dataSelected": {
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
        "attribute": "data-selected",
        "reflect": true,
        "defaultValue": "false"
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
      "nonFilterable": {
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
        "attribute": "non-filterable",
        "reflect": true,
        "defaultValue": "false"
      },
      "instanceId": {
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
        "attribute": "instance-id",
        "reflect": false,
        "defaultValue": "`js-soul-text-option-${++textOptionId}`"
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "soulOptionChange",
        "name": "soulOptionChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SoulTextOption",
          "resolved": "SoulTextOption",
          "references": {
            "SoulTextOption": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "soulOptionClick",
        "name": "soulOptionClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SoulTextOption",
          "resolved": "SoulTextOption",
          "references": {
            "SoulTextOption": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "soulOptionHover",
        "name": "soulOptionHover",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SoulTextOption",
          "resolved": "SoulTextOption",
          "references": {
            "SoulTextOption": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "soulOptionSelectChange",
        "name": "soulOptionSelectChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SoulTextOption",
          "resolved": "SoulTextOption",
          "references": {
            "SoulTextOption": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "clone": {
        "complexType": {
          "signature": "() => Promise<HTMLSoulTextOptionElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLSoulTextOptionElement": {
              "location": "global"
            },
            "Element": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLSoulTextOptionElement>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "match": {
        "complexType": {
          "signature": "(term: string) => Promise<boolean>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
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
        "propName": "text",
        "methodName": "onChange"
      }, {
        "propName": "additionalText",
        "methodName": "onChange"
      }, {
        "propName": "selected",
        "methodName": "onSelectedChange"
      }];
  }
}
let textOptionId = 0;
//# sourceMappingURL=soul-text-option.js.map
