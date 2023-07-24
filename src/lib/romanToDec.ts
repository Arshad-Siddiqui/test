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

  const numberArr = romanStr.split("").map((value) => {
    return converter[value];
  });

  let lastValue = numberArr[0];
  return numberArr.reduce((accumulator, current) => {
    const addition = lastValue < current ? current - lastValue * 2 : current;
    lastValue = current;
    return accumulator + addition;
  }, 0);
}
