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
  console.log("romanArr:", romanArr);
  const numberArr = romanArr.map((value) => {
    return converter[value];
  });
  console.log("numberArr:", numberArr);

  const additions = numberArr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  console.log("additions:", additions);

  const smallestValue = Math.min(...numberArr);
  console.log("smallest value:", smallestValue);
  const lastValue = numberArr[numberArr.length - 1];
  console.log("lastValue:", lastValue);
  return lastValue > smallestValue ? additions - 2 : additions;
}

// #TODO 99 doesn't work as I should check if the value before was smaller and
// Not subtract from the last number.
