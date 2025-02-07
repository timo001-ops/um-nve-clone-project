class SizeHelper {
  validateSize(supportedSizes, size) {
    if (!this.isValidSize(supportedSizes, size)) {
      console.debug(`Size ${size} not supported. Supported sizes: ${supportedSizes.join(', ')}`);
    }
  }
  isValidSize(supportedSizes, size) {
    return supportedSizes.includes(size);
  }
}

export { SizeHelper as S };

//# sourceMappingURL=SizeHelper.js.map