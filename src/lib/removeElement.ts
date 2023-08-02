export function removeElement(nums: number[], val: number): number {
  const newArray = nums.filter((element) => element != val);
  const differenceInLength = nums.length - newArray.length;
  nums.length = 0;
  nums.push(...newArray);
  return differenceInLength;
}
