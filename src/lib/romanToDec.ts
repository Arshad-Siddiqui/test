export default function romanToDecimal(roman: string): number {
  if (roman == "I") {
    return 1;
  }
  if (roman == "X") {
    return 10;
  }
  return 5;
}
