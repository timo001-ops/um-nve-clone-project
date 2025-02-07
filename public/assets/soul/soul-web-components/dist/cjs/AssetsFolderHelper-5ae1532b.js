'use strict';

function getAssetsFolder(hostElement) {
  const assetsFolder = getComputedStyle(hostElement).getPropertyValue('--soul-assets-folder');
  if (assetsFolder.trim().indexOf('^') == 0) {
    return assetsFolder.trim().replace(/\^/, '');
  }
  return assetsFolder;
}

exports.getAssetsFolder = getAssetsFolder;

//# sourceMappingURL=AssetsFolderHelper-5ae1532b.js.map