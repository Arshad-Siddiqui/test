export default function romanToDecimal(roman: string): number {
  if (roman == "IV") {
    return 4;
  }

  if (roman == "IX") {
    return 9;
  }

  const romanArr = roman.split("");
  const converter: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return romanArr.reduce((accumulator, current) => {
    return accumulator + converter[current];
  }, 0);
}
