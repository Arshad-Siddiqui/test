export default function romanToDecimal(roman: string): number {
  const converter: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
  };

  return converter[roman];
}
