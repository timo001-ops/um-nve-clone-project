import { Host, h } from '@stencil/core';
import { isDefined, isNotEmpty } from '../../utils/utils';
import { ProgressHelper } from '../../services/ProgressHelper';
import { StatusHelper } from '../../services/StatusHelper';
import { SizeHelper } from '../../services/SizeHelper';
export class SoulProgressRing {
  constructor() {
    this.supportedStatuses = ['positive', 'warning', 'critical'];
    this.supportedSizes = ['s', 'm', 'l'];
    this.progressHelper = new ProgressHelper();
    this.statusHelper = new StatusHelper();
    this.sizeHelper = new SizeHelper();
    this.range = { min: 0, max: 100 };
    this.radiusBySize = { s: '44%', m: '45%', l: '47%' };
    this.DEFAULT_SIZE = 'm';
    this.size = 'm';
    this.indeterminate = false;
    this.progress = 0;
    this.min = 0;
    this.max = 100;
    this.label = undefined;
    this.accessibilityLabel = undefined;
    this.hideLabel = false;
    this.status = undefined;
    this.color = 'neutral';
  }
  componentWillLoad() {
    this.range = this.progressHelper.getRange(this.min, this.max);
  }
  rangeValueChange() {
    this.range = this.progressHelper.getRange(this.min, this.max);
  }
  statusChange(newValue) {
    this.statusHelper.validateStatus(this.supportedStatuses, newValue);
  }
  sizeChange(newValue) {
    this.sizeHelper.validateSize(this.supportedSizes, newValue);
  }
  render() {
    const progressPercentage = this.progressHelper.getProgressPercentage(this.range, this.progress);
    const label = this.progressHelper.getLabel(this.label, this.indeterminate, progressPercentage);
    const accessibilityLabel = this.progressHelper.getAccessibilityLabel(this.accessibilityLabel, label);
    const radiusBySize = isDefined(this.size) && this.sizeHelper.isValidSize(this.supportedSizes, this.size) ? this.radiusBySize[this.size] : this.radiusBySize[this.DEFAULT_SIZE];
    return (h(Host, { role: 'progressbar', "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.progress, "aria-label": accessibilityLabel, title: this.hideLabel ? (accessibilityLabel ? accessibilityLabel : label) : '' }, h("div", { class: {
        'soul-progress-ring': true,
        [this.indeterminate ? 'soul-progress-ring--indeterminate' : `soul-progress-ring--progress-${progressPercentage}`]: true,
        [isDefined(this.size) && this.sizeHelper.isValidSize(this.supportedSizes, this.size) ? `soul-progress-ring--${this.size}` : 'soul-progress-ring--m']: true,
        'soul-progress-ring--critical': this.status === 'critical',
        'soul-progress-ring--warning': this.status === 'warning',
        'soul-progress-ring--positive': this.status === 'positive'
      } }, h("svg", { class: ' soul-progress-ring__circles', width: '100%', height: '100%' }, h("circle", { class: 'soul-progress-ring__track', cx: '50%', cy: '50%', r: radiusBySize }), h("circle", { class: 'soul-progress-ring__fill', cx: '50%', cy: '50%', r: radiusBySize })), this.hasLabel(label) ? h("span", { class: 'soul-progress-ring__content' }, label) : '', isDefined(this.status) && this.statusHelper.isValidStatus(this.supportedStatuses, this.status) ? h("div", { class: 'soul-progress-ring__indicator' }, h("soul-indicator", { type: this.status, border: true })) : '')));
  }
  hasLabel(label) {
    return !this.hideLabel && isNotEmpty(label);
  }
  static get is() { return "soul-progress-ring"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-progress-ring.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-progress-ring.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'s' | 'm' | 'l'",
          "resolved": "\"l\" | \"m\" | \"s\"",
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
      "indeterminate": {
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
        "attribute": "indeterminate",
        "reflect": true,
        "defaultValue": "false"
      },
      "progress": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "progress",
        "reflect": true,
        "defaultValue": "0"
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "min",
        "reflect": true,
        "defaultValue": "0"
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "max",
        "reflect": true,
        "defaultValue": "100"
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
      "hideLabel": {
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
        "attribute": "hide-label",
        "reflect": true,
        "defaultValue": "false"
      },
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'warning' | 'positive' | 'critical'",
          "resolved": "\"critical\" | \"positive\" | \"warning\"",
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
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'neutral' | 'primary'",
          "resolved": "\"neutral\" | \"primary\"",
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
        "defaultValue": "'neutral'"
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "min",
        "methodName": "rangeValueChange"
      }, {
        "propName": "max",
        "methodName": "rangeValueChange"
      }, {
        "propName": "status",
        "methodName": "statusChange"
      }, {
        "propName": "size",
        "methodName": "sizeChange"
      }];
  }
}
//# sourceMappingURL=soul-progress-ring.js.map
