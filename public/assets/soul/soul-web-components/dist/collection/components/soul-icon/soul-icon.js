import { h, Host } from '@stencil/core';
import { getAssetsFolder } from '../../services/AssetsFolderHelper';
import { isNotEmpty } from '../../utils/utils';
import { SizeHelper } from '../../services/SizeHelper';
export class SoulIcon {
  constructor() {
    this.supportedSizes = ['2-xs', 'xs', 's', 'm', 'l', 'xl', '2-xl', '3-xl'];
    this.supportedColors = ['primary', 'secondary', 'reduced'];
    this.sizeHelper = new SizeHelper();
    this.name = undefined;
    this.size = 's';
    this.inline = false;
    this.color = undefined;
    this.iconStackUrl = undefined;
  }
  nameChange() {
    this.setIconUrl();
  }
  sizeChange(newValue) {
    this.sizeHelper.validateSize(this.supportedSizes, newValue);
  }
  colorChange(newValue) {
    this.validateColors(newValue);
  }
  render() {
    return (h(Host, null, h("div", { class: 'soul-icon__icon', style: { '--_soul-icon-url': this.iconUrl } })));
  }
  componentWillLoad() {
    this.assetsFolder = getAssetsFolder(this.hostElement);
    this.setIconUrl();
  }
  setIconUrl() {
    var _a;
    const nameTrimmed = (_a = this.name) === null || _a === void 0 ? void 0 : _a.trim();
    this.iconUrl = this.iconStackUrl ? `url(${this.iconStackUrl}#${nameTrimmed})` : `url(${this.assetsFolder}/sprite/core-icons.stack.svg#${nameTrimmed})`;
  }
  validateColors(newValue) {
    if (isNotEmpty(this.color) && !this.supportedColors.includes(newValue)) {
      console.debug(`Color ${newValue} not supported. Supported colors: ${this.supportedColors.join(', ')}. You can use --soul-icon-color to customize icon color.`);
    }
  }
  static get is() { return "soul-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-icon.css"]
    };
  }
  static get properties() {
    return {
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
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'2-xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2-xl' | '3-xl'",
          "resolved": "\"2-xl\" | \"2-xs\" | \"3-xl\" | \"l\" | \"m\" | \"s\" | \"xl\" | \"xs\"",
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
        "defaultValue": "'s'"
      },
      "inline": {
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
        "attribute": "inline",
        "reflect": true,
        "defaultValue": "false"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'primary' | 'secondary' | 'reduced'",
          "resolved": "\"primary\" | \"reduced\" | \"secondary\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": true
      },
      "iconStackUrl": {
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
        "attribute": "icon-stack-url",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "name",
        "methodName": "nameChange"
      }, {
        "propName": "size",
        "methodName": "sizeChange"
      }, {
        "propName": "color",
        "methodName": "colorChange"
      }];
  }
}
//# sourceMappingURL=soul-icon.js.map
