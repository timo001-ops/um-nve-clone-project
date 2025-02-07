import { h, Host } from '@stencil/core';
import { PopoverHelper } from '../../services/PopoverHelper';
import { isDefined, isNotEmpty, isUndefined } from '../../utils/utils';
import { isKeyboardKeyAction, Keymap } from '../../utils/Keymap';
import { SelectHelper } from '../../services/SelectHelper';
export class SoulSelect {
  constructor() {
    this.supportedStatuses = ['warning', 'critical'];
    this.highlightedIndex = -1;
    this.isPopoverVisible = false;
    this.instanceId = `js-soul-select-${++selectId}-input`;
    this.popoverHelper = new PopoverHelper();
    this.additionalLabel = undefined;
    this.disabled = false;
    this.disableSpaces = false;
    this.helpText = undefined;
    this.inputOnly = false;
    this.label = undefined;
    this.maxHeight = '18rem';
    this.noOptionsMessage = 'No options';
    this.placeholder = undefined;
    this.searchable = false;
    this.stateless = false;
    this.status = undefined;
    this.statusMessage = undefined;
    this.tooltipPosition = 'top-start';
    this.searchFunction = undefined;
    this.showEmptyOptionMessage = false;
    this.optionHeightObserver = new ResizeObserver(this.resizePlaceholderElement.bind(this));
  }
  componentDidRender() {
    this.optionListElement.addEventListener('toggle', (event) => {
      if (event.newState === 'closed') {
        this.isPopoverVisible = false;
        this.popoverHelper.disconnect();
        this.resetHighlight();
      }
    });
    this.optionHeightObserver.disconnect();
    this.optionHeightObserver.observe(this.optionCloneElement);
    this.setPlaceholderElementHeight();
    this.setActionSlotVisibility();
    this.setTooltipTriggerElement();
  }
  disconnectedCallback() {
    this.optionHeightObserver.disconnect();
    this.popoverHelper.disconnect();
  }
  async onOptionChange(event) {
    await this.updateSelectedOptionClone(event.detail);
  }
  onOptionHover(event) {
    this.resetHighlight();
    event.detail.highlighted = true;
    this.highlightedIndex = this.getOptions().findIndex(option => option.highlighted);
  }
  async onSoulClick(event) {
    await this.selectOption(event.detail);
  }
  async onOptionSelectChange(event) {
    const changedOption = event.detail;
    this.doOnSelectChange(changedOption, changedOption.selected, false);
  }
  async doOnSelectChange(option, isSelected, bubbling) {
    if (isSelected) {
      if (this.stateless) {
        option.dataSelected = false;
      }
      else {
        this.deselectOtherOptions(option);
        await this.updateSelectedOptionClone(option);
      }
      if (bubbling) {
        this.soulOptionSelect.emit(option.value);
      }
    }
    else if (this.areAllOptionsDeselected() && !this.stateless) {
      this.emptyElement(this.selectionElement);
      if (bubbling) {
        this.soulOptionSelect.emit(null);
      }
    }
  }
  onDisabledChange() {
    const selectedElements = this.getOptions().filter(option => option.dataSelected);
    selectedElements.forEach(selectedElement => this.updateSelectedOptionClone(selectedElement));
  }
  async onKeyUp(keyboardEvent) {
    if (this.searchable && !isKeyboardKeyAction(keyboardEvent)) {
      await this.setFilterDataAttributes(this.inputElement.value.trim());
      const matchingOptions = this.getMatchingOptions();
      this.soulSearch.emit({ searchTerm: this.inputElement.value, matches: matchingOptions.length, matchingOptions: matchingOptions });
      if (!this.isPopoverVisible) {
        this.togglePopover();
      }
      this.highlightNotFilteredOption();
      this.showEmptyOptionMessage = this.getOptions().every(option => option.hasAttribute(SelectHelper.FILTER_ATTRIBUTE));
    }
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'soul-select': true,
        'soul-select--critical': this.status === 'critical',
        'soul-select--warning': this.status === 'warning'
      }, ref: el => this.selectElement = el }, !this.inputOnly && (isNotEmpty(this.label) || isNotEmpty(this.additionalLabel)) ?
      h("div", { class: "soul-select__label" }, h("label", { htmlFor: this.instanceId }, this.label, isNotEmpty(this.additionalLabel) ?
        h("span", { class: "soul-select__additional-label" }, this.additionalLabel) : '')) : '', h("div", { class: "soul-select__control" }, this.renderTooltip(), h("input", { disabled: this.disabled, onKeyDown: this.onKeyDown.bind(this), onKeyUp: this.onKeyUp.bind(this), onClick: this.togglePopover.bind(this), id: this.instanceId, type: "text", spellcheck: false, class: "soul-select__input", readonly: !this.searchable, pattern: ".+", required: true, ref: el => this.inputElement = el }), !this.stateless ? h("div", { class: "soul-select__selection", ref: el => this.selectionElement = el }) : '', h("div", { class: "soul-select__placeholder", ref: el => this.placeholderElement = el }, isNotEmpty(this.placeholder) ?
      h("span", { class: "soul-label soul-label--reduced" }, this.placeholder) : ''), h("div", { class: "soul-select__input-icon" }, h("soul-icon", { name: "down", size: "s", color: "reduced" }))), this.shouldRenderStatusMessage ?
      h("div", { class: "soul-select__status-message" }, this.statusMessage) : '', !this.inputOnly && isNotEmpty(this.helpText) ?
      h("div", { class: "soul-select__help" }, this.helpText) : '', h("div", { class: "soul-select__option-clone", ref: el => this.optionCloneElement = el }), h("div", { class: "soul-select__action" }, h("slot", { ref: el => this.actionElement = el, name: "action" }))), h("div", Object.assign({ class: "soul-select__options" }, { 'popover': '' }, { ref: el => this.optionListElement = el }), this.showEmptyOptionMessage ? h("div", { class: "soul-select__options-message" }, h("span", { class: "soul-label soul-label--reduced" }, this.noOptionsMessage)) : '', h("slot", { ref: el => this.optionsElement = el, onSlotchange: this.setPlaceholderElementHeight.bind(this) }))));
  }
  get shouldRenderTooltip() {
    return this.inputOnly && (this.shouldRenderStatusMessage || isNotEmpty(this.helpText));
  }
  get shouldRenderStatusMessage() {
    return this.isStatusValid && isNotEmpty(this.statusMessage);
  }
  get isStatusValid() {
    return this.supportedStatuses.includes(this.status);
  }
  renderTooltip() {
    return this.shouldRenderTooltip ? (h("soul-tooltip", { text: this.shouldRenderStatusMessage ? this.statusMessage : this.helpText, status: this.status ? this.status : undefined, position: this.tooltipPosition, ref: el => this.tooltipElement = el })) : '';
  }
  getMatchingOptions() {
    return this.getOptions().filter(option => !this.isOptionFiltered(option) && !option.nonFilterable);
  }
  highlightNotFilteredOption() {
    const highlightedOption = this.getOptions()[this.highlightedIndex];
    if (!this.isOptionUsable(highlightedOption)) {
      this.highlightFirstNotFilteredOption();
    }
  }
  isOptionFiltered(option) {
    return option.hasAttribute(SelectHelper.FILTER_ATTRIBUTE);
  }
  highlightFirstNotFilteredOption() {
    this.removeCurrentOptionHighlight();
    const firstVisibleOptionIndex = this.getOptions().findIndex((option) => this.isOptionUsable(option));
    if (firstVisibleOptionIndex !== -1) {
      this.highlightOptionByIndex(firstVisibleOptionIndex);
    }
  }
  async setFilterDataAttributes(term) {
    const options = this.getOptions().filter(option => !option.nonFilterable);
    const allMatchPromises = [];
    for (const soulOption of options) {
      if (this.isOptionHidden(soulOption)) {
        soulOption.setAttribute(SelectHelper.FILTER_ATTRIBUTE, 'true');
      }
      else if (this.searchFunction && term !== '') {
        this.searchFunction(soulOption, term) ?
          soulOption.removeAttribute(SelectHelper.FILTER_ATTRIBUTE) :
          soulOption.setAttribute(SelectHelper.FILTER_ATTRIBUTE, 'true');
      }
      else {
        allMatchPromises.push(soulOption.match(this.inputElement.value).then(matches => {
          matches ? soulOption.removeAttribute(SelectHelper.FILTER_ATTRIBUTE) : soulOption.setAttribute(SelectHelper.FILTER_ATTRIBUTE, 'true');
        }));
      }
    }
    await Promise.all(allMatchPromises);
  }
  async onKeyDown(event) {
    switch (event.key) {
      case Keymap.SPACE: {
        this.onSpaceKeyDown(event);
        break;
      }
      case Keymap.DOWN: {
        this.openOrElse(() => this.highlightNextOption());
        event.preventDefault();
        break;
      }
      case Keymap.UP: {
        this.openOrElse(() => this.highlightPreviousOption());
        event.preventDefault();
        break;
      }
      case Keymap.ENTER: {
        this.openOrElse(async () => await this.selectHighlightedOption());
        break;
      }
      case Keymap.ESC: {
        if (this.isPopoverVisible) {
          this.togglePopover();
          await this.resetSearch();
        }
        break;
      }
      default:
        break;
    }
  }
  async selectOption(option) {
    await this.resetSearch();
    this.togglePopover();
    if (!option.dataSelected) {
      option.dataSelected = true;
      await this.doOnSelectChange(option, option.dataSelected, true);
    }
  }
  async resetSearch() {
    if (this.searchable) {
      this.inputElement.value = '';
      await this.setFilterDataAttributes('');
      this.showEmptyOptionMessage = false;
      const matchingOptions = this.getMatchingOptions();
      this.soulSearch.emit({ searchTerm: '', matches: matchingOptions.length, matchingOptions: matchingOptions });
    }
  }
  areAllOptionsDeselected() {
    return this.getOptions().every(option => !option.dataSelected);
  }
  resetHighlight() {
    this.getOptions().forEach(optionElement => optionElement.highlighted = false);
  }
  async updateSelectedOptionClone(option) {
    var _a;
    const selectedOptionClone = await option.clone();
    selectedOptionClone.passive = true;
    selectedOptionClone.selected = false;
    selectedOptionClone.disabled = this.disabled;
    this.emptyElement(this.selectionElement);
    (_a = this.selectionElement) === null || _a === void 0 ? void 0 : _a.appendChild(selectedOptionClone);
  }
  emptyElement(element) {
    while (element === null || element === void 0 ? void 0 : element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  deselectOtherOptions(exclude) {
    this.getOptions().forEach(option => {
      if (option.instanceId !== exclude.instanceId) {
        option.dataSelected = false;
      }
    });
  }
  openOrElse(elseFunction) {
    if (!this.isPopoverVisible) {
      this.togglePopover();
    }
    else {
      elseFunction();
    }
  }
  togglePopover() {
    if (this.isPopoverVisible) {
      this.optionListElement.hidePopover();
    }
    else {
      this.setHighlightedOptionIndex();
      this.optionListElement.showPopover();
      this.isPopoverVisible = true;
      this.popoverHelper.connect(this.inputElement, this.optionListElement, this.maxHeight);
      this.scrollToHighlightedOption();
    }
  }
  async setPlaceholderElementHeight() {
    const firstOption = this.getOptions()[0];
    if (firstOption) {
      const clonedOption = await firstOption.clone();
      this.optionCloneElement.replaceChildren(clonedOption);
      this.placeholderElement.style.height = `${this.optionCloneElement.getBoundingClientRect().height}px`;
    }
  }
  onSpaceKeyDown(event) {
    if (!this.isPopoverVisible) {
      this.togglePopover();
    }
    if (this.disableSpaces) {
      event.preventDefault();
    }
  }
  setHighlightedOptionIndex() {
    this.highlightedIndex = this.getOptions().findIndex(option => option.dataSelected);
  }
  removeCurrentOptionHighlight() {
    const assignedElements = this.getOptions();
    if (isDefined(assignedElements[this.highlightedIndex])) {
      assignedElements[this.highlightedIndex].highlighted = false;
    }
  }
  isLastOptionHighlighted() {
    return this.highlightedIndex + 1 === this.getOptions().length;
  }
  isFirstOptionHighlighted() {
    return this.highlightedIndex === 0;
  }
  highlightOptionByIndex(index) {
    this.highlightedIndex = index;
    const assignedElements = this.getOptions();
    assignedElements[index].highlighted = true;
  }
  highlightPreviousOption() {
    if (!this.isFirstOptionHighlighted()) {
      const previousIndex = this.getPreviousIndex(this.highlightedIndex);
      if (previousIndex != this.highlightedIndex) {
        this.removeCurrentOptionHighlight();
        this.highlightOptionByIndex(previousIndex);
        this.scrollUpToOption();
      }
    }
  }
  highlightNextOption() {
    if (!this.isLastOptionHighlighted()) {
      const nextIndex = this.getNextIndex(this.highlightedIndex);
      if (nextIndex != this.highlightedIndex) {
        this.removeCurrentOptionHighlight();
        this.highlightOptionByIndex(nextIndex);
        this.scrollDownToOption();
      }
    }
  }
  scrollUpToOption() {
    const highlightedOption = this.getOptions()[this.highlightedIndex];
    if (!this.isHighlightedOptionVisible(highlightedOption)) {
      highlightedOption.scrollIntoView();
    }
  }
  scrollDownToOption() {
    const highlightedOption = this.getOptions()[this.highlightedIndex];
    if (!this.isHighlightedOptionVisible(highlightedOption)) {
      const optionsListHeight = this.optionListElement.offsetHeight;
      const optionHeight = highlightedOption.offsetHeight;
      const scrollOffset = this.optionListElement.scrollTop;
      const topOffset = (this.highlightedIndex * optionHeight) + optionHeight - scrollOffset - optionsListHeight;
      this.optionListElement.scrollTo({ top: topOffset + scrollOffset });
    }
  }
  isHighlightedOptionVisible(option) {
    const optionsListHeight = this.optionListElement.offsetHeight;
    const optionHeight = option.offsetHeight;
    const scrollOffset = this.optionListElement.scrollTop;
    return (this.highlightedIndex * optionHeight) >= scrollOffset && (this.highlightedIndex * optionHeight) + optionHeight <= scrollOffset + optionsListHeight;
  }
  getOptions() {
    return this.optionsElement.assignedElements().reduce((previousValue, element) => {
      if (element.tagName === 'SOUL-OPTION-GROUP') {
        const elementOptions = Array.from(element.children);
        previousValue.push(...elementOptions);
      }
      else {
        previousValue.push(element);
      }
      return previousValue;
    }, []);
  }
  async selectHighlightedOption() {
    const assignedElements = this.getOptions();
    const optionToSelect = assignedElements[this.highlightedIndex];
    if (this.isOptionUsable(optionToSelect)) {
      await this.selectOption(optionToSelect);
    }
  }
  scrollToHighlightedOption() {
    setTimeout(() => {
      const selectedOption = this.getOptions()[this.highlightedIndex];
      if (selectedOption && !this.isHighlightedOptionVisible(selectedOption)) {
        selectedOption.scrollIntoView();
      }
    }, 0);
  }
  getPreviousIndex(index) {
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      const previousIndexOption = this.getOptions()[previousIndex];
      return this.isOptionUsable(previousIndexOption) ? previousIndex : this.getPreviousIndex(previousIndex);
    }
    return this.highlightedIndex;
  }
  getNextIndex(index) {
    const nextIndex = index + 1;
    if (nextIndex < this.getOptions().length) {
      const nextIndexOption = this.getOptions()[nextIndex];
      return this.isOptionUsable(nextIndexOption) ? nextIndex : this.getNextIndex(nextIndex);
    }
    return this.highlightedIndex;
  }
  setActionSlotVisibility() {
    if (!this.inputOnly && this.actionElement.assignedElements().length > 0) {
      this.selectElement.style.setProperty('--_soul-select-action-display', 'block');
    }
    else {
      this.selectElement.style.setProperty('--_soul-select-action-display', 'none');
    }
  }
  resizePlaceholderElement(entries) {
    this.placeholderElement.style.height = `${entries[0].contentRect.height}px`;
  }
  isOptionDisabled(option) {
    return option.disabled || option.hasAttribute(SelectHelper.GROUP_DISABLED_ATTRIBUTE);
  }
  isOptionHidden(option) {
    return option.hidden || option.hasAttribute(SelectHelper.GROUP_HIDDEN_ATTRIBUTE);
  }
  isOptionUsable(option) {
    return !(isUndefined(option) || this.isOptionDisabled(option) || this.isOptionHidden(option) || this.isOptionFiltered(option));
  }
  setTooltipTriggerElement() {
    if (isDefined(this.tooltipElement)) {
      this.tooltipElement.triggerElement = this.inputElement;
    }
  }
  static get is() { return "soul-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-select.css"]
    };
  }
  static get properties() {
    return {
      "additionalLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "additional-label",
        "reflect": true
      },
      "disabled": {
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
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "disableSpaces": {
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
        "attribute": "disable-spaces",
        "reflect": true,
        "defaultValue": "false"
      },
      "helpText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "help-text",
        "reflect": true
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
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label",
        "reflect": true
      },
      "maxHeight": {
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
        "attribute": "max-height",
        "reflect": true,
        "defaultValue": "'18rem'"
      },
      "noOptionsMessage": {
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
        "attribute": "no-options-message",
        "reflect": true,
        "defaultValue": "'No options'"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "placeholder",
        "reflect": true
      },
      "searchable": {
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
        "attribute": "searchable",
        "reflect": true,
        "defaultValue": "false"
      },
      "stateless": {
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
        "attribute": "stateless",
        "reflect": true,
        "defaultValue": "false"
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
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
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
      },
      "searchFunction": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "<K extends HTMLSoulTextOptionElement | HTMLSoulAvatarOptionElement>(option: K, term: string) => boolean",
          "resolved": "<K extends HTMLSoulAvatarOptionElement | HTMLSoulTextOptionElement>(option: K, term: string) => boolean",
          "references": {
            "HTMLSoulTextOptionElement": {
              "location": "global"
            },
            "HTMLSoulAvatarOptionElement": {
              "location": "global"
            },
            "K": {
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
  static get states() {
    return {
      "showEmptyOptionMessage": {}
    };
  }
  static get events() {
    return [{
        "method": "soulOptionSelect",
        "name": "soulOptionSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "soulSearch",
        "name": "soulSearch",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SoulSelectSearchEvent",
          "resolved": "{ searchTerm: string; matches: number; matchingOptions: HTMLSoulOption[]; }",
          "references": {
            "SoulSelectSearchEvent": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "onDisabledChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "soulOptionChange",
        "method": "onOptionChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "soulOptionHover",
        "method": "onOptionHover",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "soulOptionClick",
        "method": "onSoulClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "soulOptionSelectChange",
        "method": "onOptionSelectChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
let selectId = 0;
//# sourceMappingURL=soul-select.js.map
