import { h, Host, forceUpdate } from '@stencil/core';
import { isDefined, isNotEmpty } from '../../utils/utils';
import { Keymap } from '../../utils/Keymap';
export class SoulInputWrapper {
  constructor() {
    this.instanceId = `soul-input-wrapper-${++inputWrapperId}`;
    this.INPUT_TYPE_ATTRIBUTE = 'type';
    this.INPUT_TYPE_DATA_ATTRIBUTE = 'data-type';
    this.overlayResizeObserver = new ResizeObserver(this.setInputRightPadding.bind(this));
    this.supportedStatuses = ['warning', 'critical'];
    this.dateTimeTypes = ['date', 'month', 'week', 'time', 'datetime-local'];
    this.typesWithClearButton = ['text', 'email', 'tel', 'url', 'search', 'color'];
    this.additionalLabel = undefined;
    this.clearButton = false;
    this.inputOnly = false;
    this.helpText = undefined;
    this.invalidStyle = false;
    this.label = undefined;
    this.status = undefined;
    this.statusMessage = undefined;
    this.tooltipPosition = 'top-start';
    this.showClearButton = false;
    this.isPasswordRevealed = false;
    this.invalid = false;
  }
  disconnectedCallback() {
    var _a;
    (_a = this.typeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentDidRender() {
    this.setTooltipTriggerElement();
  }
  render() {
    return (h(Host, { "aria-label": this.label }, h("div", { id: this.instanceId, class: {
        'soul-input-wrapper': true,
        'soul-input-wrapper--invalid': (this.invalidStyle && this.invalid),
        'soul-input-wrapper--warning': this.status === 'warning',
        'soul-input-wrapper--critical': this.status === 'critical',
        'soul-input-wrapper--readonly': this.isReadonly
      } }, this.renderLabel(), h("div", { class: "soul-input-wrapper__control" }, this.renderTooltip(), this.renderSearchIcon(), h("slot", { onSlotchange: this.onInputSlotChange.bind(this), ref: el => this.inputSlot = el }), this.renderInputOverlays()), this.renderStatusMessage(), this.renderHelpText(), this.renderAction())));
  }
  initializeInput() {
    this.inputElement = this.inputSlot.assignedElements()[0];
    this.inputElement.addEventListener('input', this.onInput.bind(this));
    this.inputElement.addEventListener('focus', this.setClearButtonVisibility.bind(this));
    this.inputElement.addEventListener('blur', this.setClearButtonVisibility.bind(this));
    this.inputElement.addEventListener('mouseleave', this.setClearButtonVisibility.bind(this));
    this.inputElement.addEventListener('mouseenter', this.setClearButtonVisibility.bind(this));
    if (this.inputType === 'search') {
      this.inputElement.addEventListener('keydown', this.onKeyDown.bind(this));
    }
    this.overlayResizeObserver.disconnect();
    this.overlayResizeObserver.observe(this.overlayElement);
    this.checkInputValidity();
    this.listenForTypeChange();
    this.setTooltipTriggerElement();
  }
  get isReadonly() {
    var _a;
    return (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.readOnly;
  }
  get isPasswordType() {
    var _a;
    return this.inputType === 'password' || ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-type')) === 'password';
  }
  get isDateType() {
    return this.dateTimeTypes.includes(this.inputType);
  }
  get isSearchType() {
    return this.inputType === 'search';
  }
  get isStatusValid() {
    return this.supportedStatuses.includes(this.status);
  }
  get inputType() {
    var _a;
    return (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.type;
  }
  get shouldRenderStatusMessage() {
    return !this.isReadonly && ((this.isStatusValid || (this.invalidStyle && this.invalid)) && isNotEmpty(this.statusMessage));
  }
  get shouldRenderCustomIcon() {
    return this.isDateType && this.showCustomIconForCurrenBrowser;
  }
  get showCustomIconForCurrenBrowser() {
    return !navigator.userAgent.includes('Firefox');
  }
  get shouldRenderTooltip() {
    return this.inputOnly && (this.shouldRenderStatusMessage || isNotEmpty(this.helpText));
  }
  get shouldRenderStatusIndicator() {
    return !this.isReadonly && (this.isStatusValid || (this.invalidStyle && this.invalid));
  }
  get shouldRenderClearButton() {
    return !this.isReadonly && this.isClearSupported && this.showClearButton && this.clearButton;
  }
  get isClearSupported() {
    return this.typesWithClearButton.includes(this.inputType) && !this.isPasswordType;
  }
  setTooltipTriggerElement() {
    if (isDefined(this.tooltipElement)) {
      this.tooltipElement.triggerElement = this.inputElement;
    }
  }
  setInputRightPadding() {
    this.hostElement.style.setProperty('--soul-input-wrapper-input-padding-right', this.getOverlayElementWidth());
  }
  getOverlayElementWidth() {
    return this.overlayElement ? `${this.overlayElement.offsetWidth}px` : '0px';
  }
  onInputSlotChange() {
    if (this.inputElement !== this.inputSlot.assignedElements()[0]) {
      this.initializeInput();
      forceUpdate(this);
    }
  }
  checkInputValidity() {
    this.invalid = !this.inputElement.checkValidity();
  }
  focusInput() {
    this.inputElement.focus();
  }
  onInput() {
    this.showClearButton = this.inputElement.value.length > 0;
    this.checkInputValidity();
  }
  onKeyDown(event) {
    if (event.key === Keymap.ESC) {
      event.preventDefault();
      this.onClearButtonClick();
    }
  }
  setClearButtonVisibility() {
    var _a;
    this.showClearButton = this.inputElement.matches(':focus') || this.inputElement.matches(':hover') || this.hostElement.matches(':focus-within') || ((_a = this.overlayElement) === null || _a === void 0 ? void 0 : _a.matches(':hover')) ? this.inputElement.value.length > 0 : false;
  }
  onClearButtonClick() {
    this.inputElement.value = '';
    this.showClearButton = false;
    this.checkInputValidity();
    this.focusInput();
    this.soulClear.emit();
  }
  onDateTimeIconClick() {
    this.inputElement.focus();
    this.inputElement.showPicker();
  }
  onPasswordVisibilityToggle() {
    if (this.inputElement.type === 'password') {
      this.inputElement.setAttribute(this.INPUT_TYPE_DATA_ATTRIBUTE, 'password');
      this.inputElement.setAttribute(this.INPUT_TYPE_ATTRIBUTE, 'text');
      this.isPasswordRevealed = true;
    }
    else if (this.inputElement.getAttribute(this.INPUT_TYPE_DATA_ATTRIBUTE) === 'password') {
      this.inputElement.setAttribute(this.INPUT_TYPE_ATTRIBUTE, 'password');
      this.inputElement.removeAttribute(this.INPUT_TYPE_DATA_ATTRIBUTE);
      this.isPasswordRevealed = false;
    }
  }
  hasSlottedAction() {
    return !!this.hostElement.querySelector('[slot="action"]');
  }
  listenForTypeChange() {
    this.typeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'type' && mutation.oldValue === 'text' && this.inputElement.type !== 'password') {
          this.inputElement.removeAttribute(this.INPUT_TYPE_DATA_ATTRIBUTE);
        }
      });
      this.isPasswordRevealed = this.inputElement.type !== 'password';
      this.checkInputValidity();
      forceUpdate(this);
    });
    this.typeObserver.observe(this.inputElement, { attributes: true, attributeOldValue: true });
  }
  renderLabel() {
    return (this.label || this.additionalLabel) ?
      h("div", { class: "soul-input-wrapper__label" }, h("label", { onClick: this.focusInput.bind(this) }, this.label, this.renderAdditionalLabel())) : '';
  }
  renderAdditionalLabel() {
    return this.additionalLabel ?
      h("span", { class: "soul-input-wrapper__additional-label" }, this.additionalLabel) : '';
  }
  renderTooltip() {
    return this.shouldRenderTooltip ?
      h("soul-tooltip", { text: this.shouldRenderStatusMessage ? this.statusMessage : this.helpText, status: this.status ? this.status : (this.invalid && this.invalidStyle) ? 'critical' : undefined, position: this.tooltipPosition, ref: el => this.tooltipElement = el }) : '';
  }
  renderSearchIcon() {
    return this.isSearchType ? h("soul-icon", { name: "search", size: "s", class: "soul-input-wrapper__search-icon" }) : '';
  }
  renderInputOverlays() {
    var _a;
    return h("div", { class: {
        'soul-input-wrapper__input-overlays': true,
        'soul-input-wrapper__input-overlays--compact': !this.showCustomIconForCurrenBrowser && this.shouldRenderStatusIndicator && ((_a = this.inputType) === null || _a === void 0 ? void 0 : _a.includes('date'))
      }, "data-type": this.inputType, ref: el => this.overlayElement = el }, this.renderClearButton(), this.renderPasswordVisibilityToggle(), this.renderCalendarIcon(), this.renderStatusIndicator());
  }
  renderPasswordVisibilityToggle() {
    return !this.isReadonly && this.isPasswordType ?
      h("button", { class: "soul-input-wrapper__password-toggle soul-button soul-button--ghost soul-button--no-space soul-button--icon-only", onClick: this.onPasswordVisibilityToggle.bind(this) }, h("div", { class: "soul-button__icon" }, h("soul-icon", { name: this.isPasswordRevealed ? 'hide' : 'show', size: "s" }))) : '';
  }
  renderStatusIndicator() {
    return this.shouldRenderStatusIndicator ?
      h("soul-indicator", { size: "s", type: this.status === 'warning' && !this.invalid ? 'warning' : 'critical' }) : '';
  }
  renderCalendarIcon() {
    return !this.isReadonly && this.shouldRenderCustomIcon ?
      h("button", { class: " soul-button soul-button--ghost soul-button--no-space soul-button--icon-only", onClick: this.onDateTimeIconClick.bind(this) }, h("div", { class: "soul-button__icon" }, h("soul-icon", { size: "m", name: this.inputType === 'time' ? 'time' : 'calendar' })))
      : '';
  }
  renderClearButton() {
    return this.shouldRenderClearButton ?
      h("button", { class: "soul-input-wrapper__clear soul-button soul-button--ghost soul-button--no-space soul-button--icon-only", onClick: this.onClearButtonClick.bind(this), onBlur: this.setClearButtonVisibility.bind(this) }, h("div", { class: "soul-button__icon" }, h("soul-icon", { name: "close", size: "s", color: "reduced" }))) : '';
  }
  renderStatusMessage() {
    return this.shouldRenderStatusMessage ?
      h("div", { class: "soul-input-wrapper__status-message" }, this.statusMessage) : '';
  }
  renderHelpText() {
    return !this.isReadonly && this.helpText ?
      h("div", { class: "soul-input-wrapper__help" }, this.helpText) : '';
  }
  renderAction() {
    return !this.isReadonly && this.hasSlottedAction() ?
      h("div", { class: "soul-input-wrapper__action" }, h("slot", { name: "action" })) : '';
  }
  static get is() { return "soul-input-wrapper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-input-wrapper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-input-wrapper.css"]
    };
  }
  static get properties() {
    return {
      "additionalLabel": {
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
        "attribute": "additional-label",
        "reflect": true
      },
      "clearButton": {
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
        "attribute": "clear-button",
        "reflect": true,
        "defaultValue": "false"
      },
      "inputOnly": {
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
        "attribute": "input-only",
        "reflect": true,
        "defaultValue": "false"
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
      "invalidStyle": {
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
        "attribute": "invalid-style",
        "reflect": true,
        "defaultValue": "false"
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
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'warning' | 'critical'",
          "resolved": "\"critical\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "status",
        "reflect": true
      },
      "statusMessage": {
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
        "attribute": "status-message",
        "reflect": true
      },
      "tooltipPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'",
          "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "tooltip-position",
        "reflect": true,
        "defaultValue": "'top-start'"
      }
    };
  }
  static get states() {
    return {
      "showClearButton": {},
      "isPasswordRevealed": {},
      "invalid": {}
    };
  }
  static get events() {
    return [{
        "method": "soulClear",
        "name": "soulClear",
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
  static get elementRef() { return "hostElement"; }
}
let inputWrapperId = 0;
//# sourceMappingURL=soul-input-wrapper.component.js.map
