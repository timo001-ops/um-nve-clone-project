function getAssetsFolder(hostElement) {
  const assetsFolder = getComputedStyle(hostElement).getPropertyValue('--soul-assets-folder');
  if (assetsFolder.trim().indexOf('^') == 0) {
    return assetsFolder.trim().replace(/\^/, '');
  }
  return assetsFolder;
}

export { getAssetsFolder as g };

//# sourceMappingURL=AssetsFolderHelper-c9ec4252.js.map