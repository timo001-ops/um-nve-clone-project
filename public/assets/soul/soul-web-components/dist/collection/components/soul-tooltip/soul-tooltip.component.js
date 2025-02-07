import { Host, h } from '@stencil/core';
import { TooltipHelper } from '../../services/TooltipHelper';
import { isDefined, isEmptyString } from '../../utils/utils';
export class SoulTooltipComponent {
  constructor() {
    this.position = 'top-start';
    this.status = undefined;
    this.triggerId = undefined;
    this.text = undefined;
    this.triggerElement = undefined;
  }
  disconnectedCallback() {
    var _a;
    (_a = this.tooltipHelper) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentDidLoad() {
    this.initializeTooltipHelper();
  }
  render() {
    return (h(Host, null, h("div", { class: { 'soul-tooltip': true, 'soul-tooltip--hidden': this.hideTooltip }, ref: el => this.tooltipElement = el, role: "tooltip" }, this.text)));
  }
  get hideTooltip() {
    return (!isDefined(this.triggerId) && !isDefined(this.triggerElement)) || (isEmptyString(this.text) || !isDefined(this.text));
  }
  initializeTooltipHelper() {
    var _a;
    const triggerElement = this.getTriggerElement();
    (_a = this.tooltipHelper) === null || _a === void 0 ? void 0 : _a.disconnect();
    if (isDefined(triggerElement)) {
      this.tooltipHelper = new TooltipHelper(triggerElement, this.tooltipElement);
      this.setTooltipPosition();
      this.tooltipHelper.connect();
      this.tooltipHelper.showTooltip();
    }
  }
  setTooltipPosition() {
    var _a;
    (_a = this.tooltipHelper) === null || _a === void 0 ? void 0 : _a.setTooltipPosition(this.position);
  }
  getTriggerElement() {
    return isDefined(this.triggerElement) ? this.triggerElement : document.getElementById(this.triggerId);
  }
  static get is() { return "soul-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-tooltip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-tooltip.css"]
    };
  }
  static get properties() {
    return {
      "position": {
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
        "attribute": "position",
        "reflect": true,
        "defaultValue": "'top-start'"
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
      "triggerId": {
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
        "attribute": "trigger-id",
        "reflect": true
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
      "triggerElement": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "HTMLElement",
          "resolved": "HTMLElement",
          "references": {
            "HTMLElement": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "triggerId",
        "methodName": "initializeTooltipHelper"
      }, {
        "propName": "triggerElement",
        "methodName": "initializeTooltipHelper"
      }, {
        "propName": "position",
        "methodName": "setTooltipPosition"
      }];
  }
}
//# sourceMappingURL=soul-tooltip.component.js.map
