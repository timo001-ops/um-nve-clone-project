import { h } from '@stencil/core';
import { isNotNull } from '../../utils/utils';
export class SoulBenefitModal {
  constructor() {
    this.CLOSING_ANIMATION_CLASS = 'soul-benefit-modal--closing';
    this.open = false;
    this.closeWithEsc = true;
    this.closeButton = false;
    this.heading = undefined;
    this.description = undefined;
  }
  async show() {
    this.open = true;
  }
  async close() {
    this.open = false;
  }
  componentDidLoad() {
    this.addCancelListener();
    if (this.open) {
      this.dialog.showModal();
    }
  }
  render() {
    return (h("dialog", { class: "soul-benefit-modal", onClose: () => this.emitCloseEvent(), ref: el => this.dialog = el }, h("div", { class: "soul-grid soul-grid--vertical" }, this.closeButton ?
      h("div", { class: "soul-benefit-modal__close" }, h("button", { onClick: () => {
          this.close();
        }, class: "soul-button soul-button--default soul-button--compact soul-button--icon-only" }, h("span", { class: "soul-button__icon" }, h("span", { class: "a-icon a-icon--close" })))) :
      '', h("div", { class: "soul-benefit-modal__media soul-grid-item-auto-span" }, h("slot", { name: "media" })), isNotNull(this.heading) || isNotNull(this.description) ?
      h("header", { class: "soul-benefit-modal__header soul-grid-item-auto-span" }, isNotNull(this.heading) ?
        h("div", { class: "soul-benefit-modal__header-title" }, h("h1", { class: "soul-heading soul-heading--h4" }, this.heading)) :
        '', isNotNull(this.description) ?
        h("div", { class: "soul-benefit-modal__header-description" }, h("p", null, this.description)) :
        '') :
      '', h("section", { class: "soul-benefit-modal__content soul-grid-item-fill-span  h-y-auto-scroll" }, h("slot", { name: "content" })), h("footer", { class: "soul-benefit-modal__buttons  soul-grid-item-auto-span soul-button-group  soul-button-group--no-wrap" }, h("slot", { name: "buttons" })))));
  }
  toggleDialog() {
    var _a;
    this.open ? (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.showModal() : this.animateClose(); //TODO check as any. Typescript types error.
  }
  emitCloseEvent() {
    this.soulClose.emit();
  }
  addCancelListener() {
    this.dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      if (this.closeWithEsc) {
        this.close();
      }
    });
  }
  animateClose() {
    this.dialog.classList.add(this.CLOSING_ANIMATION_CLASS);
    this.dialog.addEventListener('animationend', () => {
      this.dialog.close();
      this.dialog.classList.remove(this.CLOSING_ANIMATION_CLASS);
    }, { once: true });
  }
  static get is() { return "soul-benefit-modal"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-benefit-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-benefit-modal.css"]
    };
  }
  static get properties() {
    return {
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
        "defaultValue": "true"
      },
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
      "description": {
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
        "attribute": "description",
        "reflect": true
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
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "toggleDialog"
      }];
  }
}
//# sourceMappingURL=soul-benefit-modal.js.map
