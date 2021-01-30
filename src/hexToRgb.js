/**
 * @name hexToRgb
 * @param {string} hex - full hex color code e.g '#ffffff'
 * @param {number} alpha - Between 0 and 1
 * @description Converts a hex color code into an rgba value allowing you to vary the opacity of the color. Useful with theming in styled components.
 * @returns {string}
 */

export default function hexToRgb(hex, alpha = 1) {
  const { r, g, b } = {
    r: parseInt(hex.substr(1, 2), 16),
    g: parseInt(hex.substr(3, 2), 16),
    b: parseInt(hex.substr(5, 2), 16),
  };
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
