import { Host, h } from '@stencil/core';
import { isDefined, isNotEmpty } from '../../utils/utils';
import { ProgressHelper } from '../../services/ProgressHelper';
import { StatusHelper } from '../../services/StatusHelper';
export class SoulProgressBar {
  constructor() {
    this.supportedStatuses = ['positive', 'warning', 'critical'];
    this.progressHelper = new ProgressHelper();
    this.statusHelper = new StatusHelper();
    this.range = { min: 0, max: 100 };
    this.label = undefined;
    this.progress = undefined;
    this.min = 0;
    this.max = 100;
    this.hideLabel = false;
    this.indeterminate = false;
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
  render() {
    const progressPercentage = this.progressHelper.getProgressPercentage(this.range, this.progress);
    const label = this.progressHelper.getLabel(this.label, this.indeterminate, progressPercentage);
    return (h(Host, { role: "progressbar", "aria-valuemin": this.range.min, "aria-valuemax": this.range.max, "aria-valuenow": this.progress, "aria-label": label, title: this.hideLabel ? label : '' }, h("div", { class: {
        'soul-progress-bar soul-progress-bar--default': true,
        [this.indeterminate ? 'soul-progress-bar--indeterminate' : 'soul-progress-bar--determinate']: true,
        'soul-progress-bar--critical': this.status === 'critical',
        'soul-progress-bar--warning': this.status === 'warning',
        'soul-progress-bar--positive': this.status === 'positive'
      } }, h("div", { class: "soul-progress-bar__track" }, h("div", { class: "soul-progress-bar__fill", style: { width: `${progressPercentage}%` } })), this.hasLabel(label) ?
      h("div", { class: "soul-progress-bar__content" }, isDefined(this.status) && this.statusHelper.isValidStatus(this.supportedStatuses, this.status) ?
        h("div", { class: "soul-sign  soul-sign--regular soul-sign--inline" }, h("span", { class: "soul-sign__icon" }, h("soul-indicator", { size: "s", type: this.status })), h("span", { class: "soul-sign__text" }, h("span", { class: {
            'soul-label soul-label--reduced h-truncate': true,
            'soul-label--negative': this.status === 'critical',
            'soul-label--warning': this.status === 'warning',
            'soul-label--positive': this.status === 'positive'
          } }, label))) :
        h("span", { class: "soul-label soul-label--reduced h-truncate" }, label)) : '')));
  }
  hasLabel(label) {
    return !this.hideLabel && isNotEmpty(label);
  }
  static get is() { return "soul-progress-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-progress-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-progress-bar.css"]
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
        "reflect": true
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
      }];
  }
}
//# sourceMappingURL=soul-progress-bar.js.map
