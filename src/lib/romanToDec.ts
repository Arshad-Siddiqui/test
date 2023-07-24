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

  let lastValue = numberArr[0];

  return numberArr.reduce((accumulator, current) => {
    if (lastValue < current) {
      const addition = current - lastValue * 2;
      lastValue = current;
      return accumulator + addition;
    }
    lastValue = current;
    return accumulator + current;
  }, 0);
}
