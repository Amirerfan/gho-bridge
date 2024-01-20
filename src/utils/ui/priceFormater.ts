export function formatNumber(
  num: number | string | undefined | null,
  maximumSignificantDigits = 2,
) {
  num = Number(num);
  if (num === undefined || num === null) return undefined;
  if (num > 0 && num < 0.001) return '<0.001';
  return num.toLocaleString(undefined, {
    maximumSignificantDigits,
  });
}
