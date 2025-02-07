import { i as isDefined } from './utils-934fcc35.js';

const icons = [
	{
		iconName: "audio",
		extensions: [
			".aac",
			".aif",
			".aifc",
			".aiff",
			".amr",
			".au",
			".flac",
			".m3u",
			".m4a",
			".mid",
			".mp3",
			".ra",
			".wav",
			".wma",
			".wpl"
		]
	},
	{
		iconName: "CAD",
		extensions: [
			".cad"
		]
	},
	{
		iconName: "code",
		extensions: [
			".as",
			".as3",
			".asm",
			".aspx",
			".cpp",
			".bat",
			".c",
			".cc",
			".cmake",
			".cs",
			".css",
			".cxx",
			".db",
			".diff",
			".erb",
			".groovy",
			".h",
			".haml",
			".hh",
			".htm",
			".html",
			".java",
			".js",
			".less",
			".make",
			".md",
			".ml",
			".mm",
			".php",
			".pl",
			".plist",
			".properties",
			".py",
			".rb",
			".sass",
			".scala",
			".script",
			".scm",
			".scss",
			".sml",
			".sql",
			".sh",
			".wabba",
			".yaml"
		]
	},
	{
		iconName: "bpmn",
		extensions: [
			".bpmn"
		]
	},
	{
		iconName: "dmn",
		extensions: [
			".dmn"
		]
	},
	{
		iconName: "prj",
		extensions: [
			".prj"
		]
	},
	{
		iconName: "dataset",
		extensions: [
		]
	},
	{
		iconName: "project",
		extensions: [
		]
	},
	{
		iconName: "rsm",
		extensions: [
			".rsm"
		]
	},
	{
		iconName: "session",
		extensions: [
		]
	},
	{
		iconName: "study",
		extensions: [
		]
	},
	{
		iconName: "workflow",
		extensions: [
		]
	},
	{
		iconName: "bp-simulation",
		extensions: [
		]
	},
	{
		iconName: "excel",
		extensions: [
			".xls",
			".xlsx",
			".xlsm",
			".xlsb"
		]
	},
	{
		iconName: "folder",
		extensions: [
		]
	},
	{
		iconName: "folder-zip",
		extensions: [
			".7z",
			".tar",
			".gz",
			".rar",
			".tgz",
			".zip"
		]
	},
	{
		iconName: "image",
		extensions: [
			".bmp",
			".gif",
			".gdraw",
			".jpeg",
			".jpg",
			".png",
			".ps",
			".svs",
			".svg",
			".tif",
			".tiff",
			".heic",
			".heif"
		]
	},
	{
		iconName: "matlab",
		extensions: [
			".m"
		]
	},
	{
		iconName: "not-recognized",
		extensions: [
			"unknown",
			"file"
		]
	},
	{
		iconName: "pdf",
		extensions: [
			".pdf"
		]
	},
	{
		iconName: "powerpoint",
		extensions: [
			".ppt",
			".pptx",
			".pptm"
		]
	},
	{
		iconName: "sheet",
		extensions: [
			".gsheet"
		]
	},
	{
		iconName: "text",
		extensions: [
			".txt",
			".vi",
			".vim",
			".webdoc"
		]
	},
	{
		iconName: "vector",
		extensions: [
			".eps"
		]
	},
	{
		iconName: "video",
		extensions: [
			".3g2",
			".3gp",
			".avi",
			".flv",
			".m2v",
			".m2ts",
			".m4v",
			".mkv",
			".mov",
			".mp4",
			".mpeg",
			".mpg",
			".ogg",
			".mts",
			".qt",
			".wmv"
		]
	},
	{
		iconName: "word",
		extensions: [
			".docx",
			".doc",
			".docm"
		]
	},
	{
		iconName: "3D",
		extensions: [
			".swg",
			".stl",
			".wcax",
			".stp",
			".iges"
		]
	}
];
const iconMap = {
	icons: icons
};

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

export { IconMap as I };

//# sourceMappingURL=IconMap-d28a1ddc.js.map