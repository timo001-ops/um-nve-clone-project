import { h, Host } from '@stencil/core';
import { isDefined, isNotEmpty } from '../../utils/utils';
import { StatusHelper } from '../../services/StatusHelper';
import { SizeHelper } from '../../services/SizeHelper';
export class SoulAvatar {
  constructor() {
    this.supportedSizes = ['s', 'm', 'l', 'xl'];
    this.supportedColors = ['auto', 'primary', 'neutral'];
    this.maxColorIndex = 13;
    this.supportedStatuses = ['positive', 'waiting', 'locked', 'warning'];
    this.statusHelper = new StatusHelper();
    this.sizeHelper = new SizeHelper();
    this.type = 'user';
    this.size = 'm';
    this.status = undefined;
    this.imageUrl = undefined;
    this.icon = undefined;
    this.chars = undefined;
    this.name = undefined;
    this.additionalText = undefined;
    this.thumbnailOnly = false;
    this.color = 'auto';
    this.accessibilityLabel = undefined;
    this.muted = false;
    this.statusMessage = undefined;
    this.imageError = false;
  }
  componentWillLoad() {
    this.updateAriaLabel();
  }
  sizeChange(newValue) {
    this.sizeHelper.validateSize(this.supportedSizes, newValue);
  }
  statusChange(newValue) {
    this.statusHelper.validateStatus(this.supportedStatuses, newValue);
  }
  colorChange(newValue) {
    this.validateColors(newValue);
  }
  updateAriaLabel() {
    let label = this.accessibilityLabel || this.name || '';
    if (!this.accessibilityLabel) {
      if (isNotEmpty(this.additionalText) && !this.hasStatusWithMessage()) {
        label += `. ${this.additionalText}`;
      }
      if (this.hasStatusWithMessage()) {
        label += `. ${this.statusMessage}`;
      }
    }
    this.ariaLabel = label;
  }
  render() {
    const thumbnailType = this.getThumbnailType();
    const avatarColor = this.getAvatarColor();
    this.imageError = false;
    return (h(Host, { "aria-label": this.ariaLabel }, h("div", { class: `soul-avatar soul-avatar-color--${avatarColor}` }, h("div", { class: "soul-avatar__thumbnail soul-tooltip", title: this.thumbnailOnly ? this.ariaLabel : '' }, thumbnailType === 'image' ? h("img", { onError: () => this.imageError = true, class: "soul-avatar__image", src: this.imageUrl, alt: "" }) : '', thumbnailType === 'icon' ? h("div", { class: "soul-avatar__icon" }, h("soul-icon", { name: this.icon })) : '', thumbnailType === 'chars' ?
      h("div", { class: "soul-avatar__chars" }, h("abbr", null, this.getOrCalculateChars())) : '', this.hasStatus() ?
      h("div", { class: "soul-avatar__indicator" }, h("soul-indicator", { type: this.status, border: true })) : ''), !this.thumbnailOnly && this.hasTextContent() ?
      h("div", { class: "soul-avatar__content", ref: el => this.contentElement = el }, isNotEmpty(this.name) ?
        h("span", { class: "soul-avatar__name", onMouseOver: this.onMouseOver.bind(this) }, this.name) : '', isNotEmpty(this.additionalText) && !this.hasStatusWithMessage() ?
        h("span", { class: "soul-avatar__additional-text", onMouseOver: this.onMouseOver.bind(this) }, this.additionalText) : '', this.hasStatusWithMessage() ?
        h("span", { class: "soul-avatar__status-message", onMouseOver: this.onMouseOver.bind(this) }, this.statusMessage) : '') : '')));
  }
  onMouseOver(e) {
    var _a;
    const target = e.target;
    if (target.scrollWidth > this.contentElement.offsetWidth) {
      target.title = (_a = target.textContent) !== null && _a !== void 0 ? _a : '';
    }
    else {
      target.title = '';
    }
  }
  getAvatarColor() {
    if (this.color === 'primary' || this.color === 'neutral' || this.isColorInRange(this.color)) {
      return this.color;
    }
    return this.getColorIndexFromLetters();
  }
  getColorIndexFromLetters() {
    const chars = this.getOrCalculateChars();
    return isNotEmpty(chars) ? this.getColorIndexFromChars(chars.trim().toUpperCase()) : 'primary';
  }
  getColorIndexFromChars(chars) {
    const firstCharCode = chars.charCodeAt(0);
    return (firstCharCode % this.maxColorIndex) + 1;
  }
  getThumbnailType() {
    if (isNotEmpty(this.imageUrl) && !this.imageError) {
      return 'image';
    }
    if (isNotEmpty(this.icon)) {
      return 'icon';
    }
    return 'chars';
  }
  getOrCalculateChars() {
    return this.chars ? this.chars.trim() : this.getCharsFromContent();
  }
  getCharsFromContent() {
    return this.name ? this.getNameInitials(this.name) : this.getCharsFromAdditionalText();
  }
  getNameInitials(name) {
    const initials = name.split(' ').map(token => token.slice(0, 1));
    return initials.length > 1 ? initials.join('').slice(0, 3) : name.slice(0, 2);
  }
  getCharsFromAdditionalText() {
    return this.additionalText ? this.getNameInitials(this.additionalText) : null;
  }
  validateColors(newValue) {
    if (isDefined(this.color) && !this.supportedColors.includes(newValue) && !this.isColorInRange(newValue)) {
      console.debug(`Color ${newValue} not supported. Supported colors: ${this.supportedColors.join(', ')} and a index between 1 and 13`);
    }
  }
  isColorInRange(color) {
    const colorNumber = parseInt(color);
    return !isNaN(colorNumber) && colorNumber > 0 && colorNumber <= this.maxColorIndex;
  }
  hasTextContent() {
    return isNotEmpty(this.name) || isNotEmpty(this.additionalText) || this.hasStatusWithMessage();
  }
  hasStatus() {
    return isDefined(this.status) && this.statusHelper.isValidStatus(this.supportedStatuses, this.status);
  }
  hasStatusWithMessage() {
    return this.hasStatus() && isNotEmpty(this.statusMessage);
  }
  static get is() { return "soul-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-avatar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-avatar.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'user' | 'entity'",
          "resolved": "\"entity\" | \"user\"",
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
        "defaultValue": "'user'"
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
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'positive' | 'waiting' | 'locked' | 'warning'",
          "resolved": "\"locked\" | \"positive\" | \"waiting\" | \"warning\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "status",
        "reflect": true
      },
      "imageUrl": {
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
        "attribute": "image-url",
        "reflect": true
      },
      "icon": {
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
        "attribute": "icon",
        "reflect": true
      },
      "chars": {
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
        "attribute": "chars",
        "reflect": true
      },
      "name": {
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
        "attribute": "name",
        "reflect": true
      },
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
      "thumbnailOnly": {
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
        "attribute": "thumbnail-only",
        "reflect": true,
        "defaultValue": "false"
      },
      "color": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "'auto' | 'primary' | 'neutral' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13",
          "resolved": "\"auto\" | \"neutral\" | \"primary\" | 1 | 10 | 11 | 12 | 13 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": true,
        "defaultValue": "'auto'"
      },
      "accessibilityLabel": {
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
        "attribute": "accessibility-label",
        "reflect": true
      },
      "muted": {
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
        "attribute": "muted",
        "reflect": true,
        "defaultValue": "false"
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
      }
    };
  }
  static get states() {
    return {
      "imageError": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "size",
        "methodName": "sizeChange"
      }, {
        "propName": "status",
        "methodName": "statusChange"
      }, {
        "propName": "color",
        "methodName": "colorChange"
      }, {
        "propName": "accessibilityLabel",
        "methodName": "updateAriaLabel"
      }, {
        "propName": "name",
        "methodName": "updateAriaLabel"
      }, {
        "propName": "additionalText",
        "methodName": "updateAriaLabel"
      }, {
        "propName": "thumbnailOnly",
        "methodName": "updateAriaLabel"
      }];
  }
}
//# sourceMappingURL=soul-avatar.js.map
