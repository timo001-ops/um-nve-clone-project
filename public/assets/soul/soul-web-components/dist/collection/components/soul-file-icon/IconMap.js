import { isDefined } from '../../utils/utils';
import iconMap from '@esteco/soul-core/icons/file-icons/file-icons-map.json';
class IconMap {
  constructor(assetsFolder) {
    this.FILE_ICON_PATH = `${assetsFolder}/sprite/file-icons.symbol.svg`;
  }
  getIconPath(icon) {
    return this.getIconByName(icon) || this.getIconByExtension(icon) || this.getDefaultIcon();
  }
  getIconByExtension(extension) {
    if ((extension === null || extension === void 0 ? void 0 : extension.charAt(0)) !== '.') {
      extension = `.${extension}`;
    }
    const icon = IconMap.ICON_FILES.find(iconFile => iconFile.extensions.indexOf(extension === null || extension === void 0 ? void 0 : extension.toLowerCase()) > -1);
    if (isDefined(icon)) {
      return `${this.FILE_ICON_PATH}#${icon.iconName}`;
    }
  }
  getIconByName(iconName) {
    const icon = IconMap.ICON_FILES.find(iconFile => iconFile.iconName.toLowerCase() === (iconName === null || iconName === void 0 ? void 0 : iconName.toLowerCase()));
    if (isDefined(icon)) {
      return `${this.FILE_ICON_PATH}#${icon.iconName}`;
    }
  }
  getDefaultIcon() {
    return `${this.FILE_ICON_PATH}#${IconMap.DEFAULT_ICON}`;
  }
}
IconMap.DEFAULT_ICON = 'not-recognized';
IconMap.ICON_FILES = iconMap.icons;
export { IconMap };
//# sourceMappingURL=IconMap.js.map
