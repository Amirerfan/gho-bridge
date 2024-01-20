export function formatNumber(
  num: number | undefined,
  maximumSignificantDigits = 2,
) {
  if (num === undefined) return undefined;
  if (num > 0 && num < 0.001) return '<0.001';
  return num.toLocaleString(undefined, {
    maximumSignificantDigits,
  });
}
