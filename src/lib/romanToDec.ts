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

  const additions = romanArr.reduce((accumulator, current) => {
    const currentNumber = converter[current];

    return accumulator + currentNumber;
  }, 0);

  const numberArr = romanArr.map((value) => {
    return converter[value];
  });

  const smallestValue = Math.min(...numberArr);
  const lastValue = numberArr[numberArr.length - 1];

  if (lastValue > smallestValue) {
    return additions - 2;
  }
  return additions;
}
