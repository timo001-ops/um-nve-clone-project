import { h, Host } from '@stencil/core';
import { IconMap } from './IconMap';
import { getAssetsFolder } from '../../services/AssetsFolderHelper';
import { StatusHelper } from '../../services/StatusHelper';
import { isDefined } from '../../utils/utils';
import { SizeHelper } from '../../services/SizeHelper';
export class SoulFileIcon {
  constructor() {
    this.supportedSizes = ['s', 'm', 'l', 'xl', '2-xl', '3-xl'];
    this.supportedStatuses = ['positive', 'warning', 'critical', 'not-allowed', 'waiting'];
    this.statusHelper = new StatusHelper();
    this.sizeHelper = new SizeHelper();
    this.format = IconMap.DEFAULT_ICON;
    this.status = undefined;
    this.size = 's';
    this.inline = false;
    this.reference = undefined;
  }
  sizeChange(newValue) {
    this.sizeHelper.validateSize(this.supportedSizes, newValue);
  }
  statusChange(newValue) {
    this.statusHelper.validateStatus(this.supportedStatuses, newValue);
  }
  componentWillLoad() {
    this.assetsFolder = getAssetsFolder(this.el);
    this.iconMap = new IconMap(this.assetsFolder);
    this.sizeHelper.validateSize(this.supportedSizes, this.size);
    this.statusChange(this.status);
  }
  render() {
    var _a;
    const iconPath = this.iconMap.getIconPath((_a = this.format) === null || _a === void 0 ? void 0 : _a.trim());
    return h(Host, null, h("svg", { class: "soul-file-icon__icon" }, h("use", { href: iconPath })), isDefined(this.status) && this.statusHelper.isValidStatus(this.supportedStatuses, this.status) ? h("div", { class: "soul-file-icon__indicator" }, h("soul-indicator", { type: this.status, border: true })) : '', this.reference ? h("div", { class: "soul-file-icon__reference" }) : '');
  }
  static get is() { return "soul-file-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-file-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-file-icon.css"]
    };
  }
  static get properties() {
    return {
      "format": {
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
        "attribute": "format",
        "reflect": true,
        "defaultValue": "IconMap.DEFAULT_ICON"
      },
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'positive' | 'warning' | 'critical' | 'not-allowed' | 'waiting'",
          "resolved": "\"critical\" | \"not-allowed\" | \"positive\" | \"waiting\" | \"warning\"",
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
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'s' | 'm' | 'l' | 'xl' | '2-xl' | '3-xl'",
          "resolved": "\"2-xl\" | \"3-xl\" | \"l\" | \"m\" | \"s\" | \"xl\"",
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
      "reference": {
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
        "attribute": "reference",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "size",
        "methodName": "sizeChange"
      }, {
        "propName": "status",
        "methodName": "statusChange"
      }];
  }
}
//# sourceMappingURL=soul-file-icon.js.map
