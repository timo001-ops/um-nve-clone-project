import { h, Host } from '@stencil/core';
import { OptionHelper } from '../../services/OptionHelper';
import { throttle } from '../../utils/Throttle';
import { SelectHelper } from '../../services/SelectHelper';
export class SoulAvatarOption {
  constructor() {
    this.disabled = false;
    this.hidden = false;
    this.highlighted = false;
    this.passive = false;
    this.selected = false;
    this.dataSelected = false;
    this.nonFilterable = false;
    this.instanceId = `js-soul-avatar-option-${++avatarOptionId}`;
    this.value = undefined;
    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === SelectHelper.GROUP_DISABLED_ATTRIBUTE) {
          this.onDisabledChange();
        }
      }
    });
  }
  componentDidLoad() {
    this.optionHelper = new OptionHelper(this.onChange.bind(this), [this.infoSlot, this.avatarSlot]);
    if (this.selected) {
      this.onSelectedChange();
    }
    this.onDisabledChange();
  }
  componentDidRender() {
    this.observer.disconnect();
    this.observer.observe(this.hostElement, { attributes: true });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.optionHelper) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.observer.disconnect();
  }
  clone() {
    const clonedElement = document.createElement('soul-avatar-option');
    clonedElement.passive = true;
    const clonedSlotContents = this.optionHelper.cloneSlotsContent();
    clonedElement.append(...clonedSlotContents);
    return Promise.resolve(clonedElement);
  }
  async match(term) {
    return this.avatarSlot.assignedElements().some((avatar) => {
      var _a, _b;
      return ((_a = avatar.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(term.toLowerCase())) ||
        ((_b = avatar.additionalText) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(term.toLowerCase()));
    });
  }
  onDisabledChange() {
    if (this.optionHelper) {
      this.avatarSlot.assignedElements().forEach((avatar) => {
        avatar.muted = this.disabled || this.hostElement.hasAttribute(SelectHelper.GROUP_DISABLED_ATTRIBUTE);
      });
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
    return (h(Host, { ref: el => this.hostElement = el }, h("div", { class: "soul-avatar-option", onMouseMove: throttle(this.onMouseMove.bind(this), 1000), onMouseDown: (event) => this.onMouseDown(event) }, h("div", { class: "soul-grid soul-grid--horizontal soul-grid--align-center soul-grid--compact-gap" }, h("div", { class: "soul-grid-item-fill-span" }, h("slot", { ref: el => this.avatarSlot = el, name: "avatar" })), h("div", { class: "soul-grid-item-auto-span" }, h("slot", { ref: el => this.infoSlot = el, name: "info" }))))));
  }
  onChange() {
    if (this.dataSelected && !this.passive) {
      this.soulOptionChange.emit(this);
    }
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
  static get is() { return "soul-avatar-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-avatar-option.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-avatar-option.css"]
    };
  }
  static get properties() {
    return {
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
        "defaultValue": "`js-soul-avatar-option-${++avatarOptionId}`"
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
          "original": "SoulAvatarOption",
          "resolved": "SoulAvatarOption",
          "references": {
            "SoulAvatarOption": {
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
          "original": "SoulAvatarOption",
          "resolved": "SoulAvatarOption",
          "references": {
            "SoulAvatarOption": {
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
          "original": "SoulAvatarOption",
          "resolved": "SoulAvatarOption",
          "references": {
            "SoulAvatarOption": {
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
          "original": "SoulAvatarOption",
          "resolved": "SoulAvatarOption",
          "references": {
            "SoulAvatarOption": {
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
          "signature": "() => Promise<HTMLSoulAvatarOptionElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLSoulAvatarOptionElement": {
              "location": "global"
            },
            "Element": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLSoulAvatarOptionElement>"
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
            },
            "HTMLSoulAvatarElement": {
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
        "propName": "disabled",
        "methodName": "onDisabledChange"
      }, {
        "propName": "selected",
        "methodName": "onSelectedChange"
      }];
  }
}
let avatarOptionId = 0;
//# sourceMappingURL=soul-avatar-option.js.map
