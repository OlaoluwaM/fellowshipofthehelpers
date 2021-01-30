/**
 * @name rawDataType
 * @param {any} value
 * @description Returns the exact data type of the value specified
 * @returns {string} - The exact data type of the value passed
 */

export default function rawDataType(value) {
  const _toString = Object.prototype.toString;
  return _toString.call(value).slice(8, -1).toLowerCase();
}
