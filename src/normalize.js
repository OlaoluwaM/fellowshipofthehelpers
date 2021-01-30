export default function normalize(input) {
  if (input && (input?.length === 0 || Object.keys(input).length === 0 || input === '')) {
    return null;
  }
  return input;
}
