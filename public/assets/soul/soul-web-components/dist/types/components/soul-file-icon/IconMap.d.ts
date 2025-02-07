export declare class IconMap {
  static DEFAULT_ICON: string;
  static ICON_FILES: IconFile[];
  private readonly FILE_ICON_PATH;
  constructor(assetsFolder: string);
  getIconPath(icon: string): string;
  private getIconByExtension;
  private getIconByName;
  private getDefaultIcon;
}
export type IconFile = {
  iconName: string;
  extensions: string[];
};
