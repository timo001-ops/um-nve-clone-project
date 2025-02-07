'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a33e737d.js');

const soulAvatarGroupCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}:host{display:block}.soul-avatar-group__visible-avatar:not(:first-child),::slotted(.soul-avatar-group__visible-avatar:not(:first-child)){margin-left:var(--_soul-avatar-group-avatar-margin-left)}.soul-avatar-group__visible-avatar,::slotted(.soul-avatar-group__visible-avatar){display:inline-flex;vertical-align:middle}:host([size=s]){--_soul-avatar-group-avatar-margin-left:-0.25rem}:host,:host([size=m]){--_soul-avatar-group-avatar-margin-left:-0.5rem}:host([size=l]){--_soul-avatar-group-avatar-margin-left:-0.75rem}:host([size=xl]){--_soul-avatar-group-avatar-margin-left:-1.5rem}::slotted(.soul-avatar-group__hidden-avatar){display:none}";

const SoulAvatarGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("slot", { onSlotchange: () => this.updateAvatarGroup(), ref: el => this.slot = el }), this.counter.visible ?
      index.h("soul-avatar", { class: this.VISIBLE_AVATAR_CLASS, color: "neutral", chars: '+' + this.counter.number, size: this.size, type: "user" }) : ''));
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
  static get watchers() { return {
    "maxVisibleAvatars": ["maxVisibleAvatarsChanged"],
    "size": ["sizeChange"]
  }; }
};
SoulAvatarGroup.style = soulAvatarGroupCss;

exports.soul_avatar_group = SoulAvatarGroup;

//# sourceMappingURL=soul-avatar-group.cjs.entry.js.map