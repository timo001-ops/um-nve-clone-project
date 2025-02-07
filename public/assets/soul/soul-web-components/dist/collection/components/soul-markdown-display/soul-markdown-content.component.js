import { h, Host } from '@stencil/core';
import { Converter } from 'showdown';
import { isDefined, isNotEmpty } from '../../utils/utils';
import DOMPurify from 'dompurify';
export class SoulMarkdownContent {
  constructor() {
    this.url = undefined;
    this.value = undefined;
    this.scale = 's';
    this.trustContent = false;
    this.convertedValue = undefined;
    this.converter = new Converter();
    this.converter.setOption('strikethrough', 'true');
    this.converter.setOption('tables', 'true');
    this.converter.setOption('tasklists', 'true');
    this.converter.setOption('simplifiedAutoLink', 'true');
  }
  onDisabledChange() {
    this.updateInnerHTML();
  }
  componentWillLoad() {
    this.updateInnerHTML();
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'soul-content': true,
        [`soul-font-scale-${this.scale}`]: true,
        'h-y-auto-scroll': true,
      }, innerHTML: isDefined(this.convertedValue) ? this.convertedValue : '' })));
  }
  updateInnerHTML() {
    if (isNotEmpty(this.url)) {
      fetch(this.url)
        .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error(response.statusText);
      })
        .then((text) => {
        this.convertedValue = this.convertMarkdownToHTML(text);
        this.soulMarkdownConverted.emit(this.convertedValue);
      })
        .catch(() => {
        this.convertedValue = '';
      });
    }
    else if (isNotEmpty(this.value)) {
      this.convertedValue = this.convertMarkdownToHTML(this.value);
      this.soulMarkdownConverted.emit(this.convertedValue);
    }
    else {
      this.convertedValue = '';
    }
  }
  convertMarkdownToHTML(markdown) {
    const html = this.converter.makeHtml(markdown);
    return this.trustContent ? html : DOMPurify.sanitize(html);
  }
  static get is() { return "soul-markdown-content"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-markdown-content.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-markdown-content.css"]
    };
  }
  static get properties() {
    return {
      "url": {
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
        "attribute": "url",
        "reflect": true
      },
      "value": {
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
        "attribute": "value",
        "reflect": false
      },
      "scale": {
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
        "attribute": "scale",
        "reflect": true,
        "defaultValue": "'s'"
      },
      "trustContent": {
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
        "attribute": "trust-content",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "convertedValue": {}
    };
  }
  static get events() {
    return [{
        "method": "soulMarkdownConverted",
        "name": "soulMarkdownConverted",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "url",
        "methodName": "onDisabledChange"
      }, {
        "propName": "value",
        "methodName": "onDisabledChange"
      }, {
        "propName": "trustContent",
        "methodName": "onDisabledChange"
      }];
  }
}
//# sourceMappingURL=soul-markdown-content.component.js.map
