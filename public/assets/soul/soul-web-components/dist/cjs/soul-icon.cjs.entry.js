'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a33e737d.js');
const AssetsFolderHelper = require('./AssetsFolderHelper-5ae1532b.js');
const utils = require('./utils-b4bbc9bf.js');
const SizeHelper = require('./SizeHelper-42d05c58.js');

const soulIconCss = ":root{--soul-assets-folder:./assets/}@font-face{font-family:\"soul-sans\";src:url(\"./assets//soul-roman.woff2\") format(\"woff2\");font-weight:100 700;font-display:swap}@font-face{font-family:\"soul-mono\";src:url(\"./assets//soul-mono.woff2\") format(\"woff2\");font-display:swap}@font-face{font-family:\"soul\";src:url(\"./assets//soul-icons.woff2\") format(\"woff2\");font-display:block}:host([size=\"2-xs\"]){--soul-icon-size:var(--soul-font-size-2-xs)}:host([size=xs]){--soul-icon-size:var(--soul-font-size-xs)}:host([size=s]){--soul-icon-size:var(--soul-font-size-s)}:host([size=m]){--soul-icon-size:var(--soul-font-size-m)}:host([size=l]){--soul-icon-size:var(--soul-font-size-l)}:host([size=xl]){--soul-icon-size:var(--soul-font-size-xl)}:host([size=\"2-xl\"]){--soul-icon-size:var(--soul-font-size-2-xl)}:host([size=\"3-xl\"]){--soul-icon-size:var(--soul-font-size-3-xl)}:host{--soul-icon-color:currentColor;--soul-icon-size:var(--soul-font-size-s)}:host,.soul-icon__icon{width:var(--soul-icon-size);height:var(--soul-icon-size)}.soul-icon__icon{--_soul-icon-name:\"\"}.soul-icon__icon:before{content:\"\";-webkit-mask-image:var(--_soul-icon-url);mask-image:var(--_soul-icon-url);background:var(--soul-icon-color);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;display:block;width:var(--soul-icon-size);height:var(--soul-icon-size)}:host([inline]),:host([inline=true]){display:inline-block}:host,:host([inline=false]),.soul-icon__icon{display:flex}:host([color=reduced]){--soul-icon-color:var(--soul-theme-color-neutral-500)}:host([color=secondary]){--soul-icon-color:var(--soul-theme-color-icon-secondary)}:host([color=primary]){--soul-icon-color:var(--soul-theme-color-icon-primary)}";

const SoulIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.supportedSizes = ['2-xs', 'xs', 's', 'm', 'l', 'xl', '2-xl', '3-xl'];
    this.supportedColors = ['primary', 'secondary', 'reduced'];
    this.sizeHelper = new SizeHelper.SizeHelper();
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
    return (index.h(index.Host, null, index.h("div", { class: 'soul-icon__icon', style: { '--_soul-icon-url': this.iconUrl } })));
  }
  componentWillLoad() {
    this.assetsFolder = AssetsFolderHelper.getAssetsFolder(this.hostElement);
    this.setIconUrl();
  }
  setIconUrl() {
    var _a;
    const nameTrimmed = (_a = this.name) === null || _a === void 0 ? void 0 : _a.trim();
    this.iconUrl = this.iconStackUrl ? `url(${this.iconStackUrl}#${nameTrimmed})` : `url(${this.assetsFolder}/sprite/core-icons.stack.svg#${nameTrimmed})`;
  }
  validateColors(newValue) {
    if (utils.isNotEmpty(this.color) && !this.supportedColors.includes(newValue)) {
      console.debug(`Color ${newValue} not supported. Supported colors: ${this.supportedColors.join(', ')}. You can use --soul-icon-color to customize icon color.`);
    }
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "name": ["nameChange"],
    "size": ["sizeChange"],
    "color": ["colorChange"]
  }; }
};
SoulIcon.style = soulIconCss;

exports.soul_icon = SoulIcon;

//# sourceMappingURL=soul-icon.cjs.entry.js.map