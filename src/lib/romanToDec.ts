export default function romanToDecimal(romanStr: string): number {
  const converter: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanArr = romanStr.split("");
  const numberArr = romanArr.map((value) => {
    return converter[value];
  });

  const additions = numberArr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  const smallestValue = Math.min(...numberArr);
  const lastValue = numberArr[numberArr.length - 1];
  return lastValue > smallestValue ? additions - 2 : additions;
}
