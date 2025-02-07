export function isUndefined(item) {
  return !isDefined(item);
}
export function isDefined(x) {
  return x !== undefined && x !== null;
}
export function isNotEmpty(value) {
  return isNotNull(value) && value !== '';
}
export function isNotNull(obj) {
  return isDefined(obj) && (obj !== null);
}
export function contains(sourceArray, element) {
  return sourceArray.indexOf(element) !== -1;
}
export function isEmptyString(value) {
  return isDefined(value) && value === '';
}
//# sourceMappingURL=utils.js.map
