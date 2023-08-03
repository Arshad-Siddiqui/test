export function squareSum(nums: number[]): number {
  return nums.reduce(
    (accumulator, current) => accumulator + current * current,
    0
  );
}
