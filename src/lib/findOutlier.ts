export function findOutlier(integers: number[]): number {
  let oddCount = 0;
  let evenCount = 0;

  integers.forEach((integer) => {
    if (integer % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  });

  let isEvenOutlier = evenCount > oddCount;

  for (let i = 0; i < integers.length; i++) {
    if (isEvenOutlier && integers[i] % 2 !== 0) {
      return integers[i];
    } else if (!isEvenOutlier && integers[i] % 2 === 0) {
      return integers[i];
    }
  }

  return 2;
}
