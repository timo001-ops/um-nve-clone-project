'use strict';

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

exports.contains = contains;
exports.isDefined = isDefined;
exports.isEmptyString = isEmptyString;
exports.isNotEmpty = isNotEmpty;
exports.isNotNull = isNotNull;
exports.isUndefined = isUndefined;

//# sourceMappingURL=utils-b4bbc9bf.js.map