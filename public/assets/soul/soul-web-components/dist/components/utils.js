function isUndefined(item) {
  return !isDefined(item);
}
function isDefined(x) {
  return x !== undefined && x !== null;
}
function isNotEmpty(value) {
  return isNotNull(value) && value !== '';
}
function isNotNull(obj) {
  return isDefined(obj) && (obj !== null);
}
function contains(sourceArray, element) {
  return sourceArray.indexOf(element) !== -1;
}
function isEmptyString(value) {
  return isDefined(value) && value === '';
}

export { isNotEmpty as a, isNotNull as b, contains as c, isEmptyString as d, isUndefined as e, isDefined as i };

//# sourceMappingURL=utils.js.map