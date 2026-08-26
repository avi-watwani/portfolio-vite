const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
] as const;

/** Converts a non-negative integer to English words (supports 0–20). */
export function numberToWords(n: number): string {
  if (n < 0 || n >= NUMBER_WORDS.length) {
    return String(n);
  }
  return NUMBER_WORDS[n];
}

/**
 * Returns a relative phrase like "four years ago" based on
 * `currentYear - startYear` (defaults to the current calendar year).
 */
export function yearsAgoInWords(
  startYear: number,
  referenceYear: number = new Date().getFullYear(),
): string {
  const years = Math.max(0, referenceYear - startYear);

  if (years === 0) return "this year";
  if (years === 1) return "one year ago";

  return `${numberToWords(years)} years ago`;
}
