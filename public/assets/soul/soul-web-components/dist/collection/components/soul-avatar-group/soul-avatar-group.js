import { Host, h } from '@stencil/core';
export class SoulAvatarGroup {
  constructor() {
    this.supportedSizes = ['s', 'm', 'l', 'xl'];
    this.VISIBLE_AVATAR_CLASS = 'soul-avatar-group__visible-avatar';
    this.HIDDEN_AVATAR_CLASS = 'soul-avatar-group__hidden-avatar';
    this.maxVisibleAvatars = 4;
    this.size = 'm';
    this.counter = { visible: false };
  }
  maxVisibleAvatarsChanged() {
    this.updateAvatarGroup();
  }
  sizeChange(newValue) {
    this.validateSize(newValue);
    this.updateAvatarGroup();
  }
  render() {
    return (h(Host, null, h("slot", { onSlotchange: () => this.updateAvatarGroup(), ref: el => this.slot = el }), this.counter.visible ?
      h("soul-avatar", { class: this.VISIBLE_AVATAR_CLASS, color: "neutral", chars: '+' + this.counter.number, size: this.size, type: "user" }) : ''));
  }
  updateAvatarGroup() {
    this.updateAvatarItems();
    this.updateCounter();
  }
  updateCounter() {
    const currentCounter = {
      visible: false
    };
    if (this.slot.assignedElements().length > this.maxVisibleAvatars) {
      currentCounter.visible = true;
      currentCounter.number = this.slot.assignedElements().length - this.maxVisibleAvatars;
    }
    this.counter = currentCounter;
  }
  updateAvatarItems() {
    this.slot.assignedElements().forEach((slotted, index) => {
      if (index >= this.maxVisibleAvatars) {
        this.setAvatarVisibility(slotted, this.HIDDEN_AVATAR_CLASS);
      }
      else {
        this.setAvatarVisibility(slotted, this.VISIBLE_AVATAR_CLASS);
      }
      slotted.matches('soul-avatar') ?
        this.standardizeAvatar(slotted) :
        slotted.querySelectorAll('soul-avatar').forEach(soulAvatar => {
          this.standardizeAvatar(soulAvatar);
        });
    });
  }
  validateSize(newValue) {
    if (!this.supportedSizes.includes(newValue)) {
      console.debug(`Size ${newValue} not supported. Supported sizes: ${this.supportedSizes.join(', ')}`);
    }
  }
  setAvatarVisibility(slotted, avatarClass) {
    slotted.classList.remove(this.VISIBLE_AVATAR_CLASS, this.HIDDEN_AVATAR_CLASS);
    slotted.classList.add(avatarClass);
  }
  standardizeAvatar(soulAvatar) {
    soulAvatar.size = this.size;
    soulAvatar.thumbnailOnly = true;
    soulAvatar.status = undefined;
  }
  static get is() { return "soul-avatar-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["soul-avatar-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["soul-avatar-group.css"]
    };
  }
  static get properties() {
    return {
      "maxVisibleAvatars": {
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
        "attribute": "max-visible-avatars",
        "reflect": true,
        "defaultValue": "4"
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
      }
    };
  }
  static get states() {
    return {
      "counter": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "maxVisibleAvatars",
        "methodName": "maxVisibleAvatarsChanged"
      }, {
        "propName": "size",
        "methodName": "sizeChange"
      }];
  }
}
//# sourceMappingURL=soul-avatar-group.js.map
