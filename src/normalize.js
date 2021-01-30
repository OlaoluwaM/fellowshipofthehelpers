/**
 * @name normalize
 * @param {object | array} value
 * @description Converts any empty string to null
 * @returns {object | array}
 */

export default function normalize(value) {
  const replacer = (_, val) => (val === '' ? null : val);
  return JSON.parse(JSON.stringify(value, replacer));
}
