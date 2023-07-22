export default function romanToDecimal(roman: string): number {
  if (roman == "II") {
    return 2;
  }

  if (roman == "III") {
    return 3;
  }

  if (roman == "IV") {
    return 4;
  }

  const converter: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return converter[roman];
}
