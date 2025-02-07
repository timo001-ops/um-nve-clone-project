import { h } from "@stencil/core";
import { SizeHelper } from "../../services/SizeHelper";
import { TypeHelper } from "../../services/TypeHelper";
import { PositionHelper } from "../../services/PositionHelper";
import { isNotEmpty } from '../../utils/utils';
export class SoulModal {
  constructor() {
    this.NO_FOOTER_CLASS = 'soul-modal--no-footer';
    this.CLOSING_ANIMATION_CLASS = 'soul-modal--closing';
    this.typesWithIndicator = ['info', 'warning', 'critical'];
    this.supportedTypes = [...this.typesWithIndicator, 'neutral'];
    this.supportedSizes = ['s', 'm', 'l', 'xl'];
    this.supportedPositions = ['center', 'side-right', 'side-left'];
    this.sizeHelper = new SizeHelper();
    this.typeHelper = new TypeHelper();
    this.positionHelper = new PositionHelper();
    this.closeButton = false;
    this.closeWithEsc = false;
    this.heading = undefined;
    this.label = undefined;
    this.open = false;
    this.position = 'center';
    this.size = 'm';
    this.type = 'neutral';
  }
  async show() {
    this.open = true;
  }
  async close() {
    this.open = false;
  }
  componentDidLoad() {
    this.checkEmtpyButtons();
    this.addCancelListener();
    this.validateType();
    this.validateSize();
    this.validatePosition();
    if (this.open) {
      this.dialog.showModal();
    }
  }
  render() {
    return (h("dialog", { class: {
        'soul-modal': true,
        'soul-modal--side-right': this.position === 'side-right',
        'soul-modal--side-left': this.position === 'side-left',
        'soul-modal--center': this.position === 'center' || !this.isPositionSupported(),
        [this.isSizeSupported() ? `soul-modal--${this.size}` : 'soul-modal--m']: true
      }, onClose: () => this.emitCloseEvent(), ref: el => this.dialog = el }, h("section", { class: "soul-modal__window" }, this.closeButton ? h("div", { class: "soul-modal__close" }, h("button", { onClick: () => {
        this.close();
      }, class: "soul-button soul-button--default soul-button--compact soul-button--icon-only" }, h("span", { class: "soul-button__icon" }, h("soul-icon", { name: "close" })))) : '', h("header", { class: "soul-modal__header" }, this.isTypeWithIndicator(this.type) ? h("soul-indicator", { class: "soul-modal__indicator", type: this.type }) : '', h("div", { class: "soul-modal__header-content" }, isNotEmpty(this.label) ? h("span", { class: "soul-modal__label" }, this.label) : '', h("h1", { class: "soul-modal__heading" }, this.heading))), h("article", { class: "soul-modal__body" }, h("div", { class: "soul-modal__top-content" }, h("slot", { name: "top-content" })), h("div", { class: "soul-modal__content" }, h("slot", { name: "content" }))), h("footer", { class: "soul-modal__footer" }, h("slot", { onSlotchange: () => this.checkEmtpyButtons(), name: "buttons" })))));
  }
  validateType() {
    this.typeHelper.validateType(this.supportedTypes, this.type);
  }
  validateSize() {
    this.sizeHelper.validateSize(this.supportedSizes, this.size);
  }
  validatePosition() {
    this.positionHelper.validatePosition(this.supportedPositions, this.position);
  }
  toggleDialog() {
    var _a;
    this.open ? (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.showModal() : this.animateClose();
  }
  addCancelListener() {
    this.dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      if (this.closeWithEsc) {
        this.close();
      }
    });
  }
  isTypeWithIndicator(type) {
    return type && this.typeHelper.isValidType(this.typesWithIndicator, type);
  }
  isSizeSupported() {
    return this.size && this.sizeHelper.isValidSize(this.supportedSizes, this.size);
  }
  isPositionSupported() {
    return this.position && this.positionHelper.isValidPosition(this.supportedPositions, this.position);
  }
  emitCloseEvent() {
    this.soulClose.emit();
  }
  animateClose() {
    this.dialog.classList.add(this.CLOSING_ANIMATION_CLASS);
    this.dialog.addEventListener('animationend', () => {
      this.dialog.close();
      this.dialog.classList.remove(this.CLOSING_ANIMATION_CLASS);
    }, { once: true });
  }
  checkEmtpyButtons() {
    this.host.querySelector('[slot="buttons"]') ?
      this.dialog.classList.remove(this.NO_FOOTER_CLASS) :
      this.dialog.classList.add(this.NO_FOOTER_CLASS);
  }
  static get is() { return "soul-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-modal.css"]
    };
  }
  static get properties() {
    return {
      "closeButton": {
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
        "attribute": "close-button",
        "reflect": true,
        "defaultValue": "false"
      },
      "closeWithEsc": {
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
        "attribute": "close-with-esc",
        "reflect": true,
        "defaultValue": "false"
      },
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
      "open": {
        "type": "boolean",
        "mutable": true,
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
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'center' | 'side-right' | 'side-left'",
          "resolved": "\"center\" | \"side-left\" | \"side-right\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "position",
        "reflect": true,
        "defaultValue": "'center'"
      },
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
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'neutral' | 'info' | 'warning' | 'critical'",
          "resolved": "\"critical\" | \"info\" | \"neutral\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'neutral'"
      }
    };
  }
  static get events() {
    return [{
        "method": "soulClose",
        "name": "soulClose",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "show": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "close": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
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
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "type",
        "methodName": "validateType"
      }, {
        "propName": "size",
        "methodName": "validateSize"
      }, {
        "propName": "position",
        "methodName": "validatePosition"
      }, {
        "propName": "open",
        "methodName": "toggleDialog"
      }];
  }
}
//# sourceMappingURL=soul-modal.js.map
