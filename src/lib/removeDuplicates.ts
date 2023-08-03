export function removeDuplicates(nums: number[]): number {
  let dupesRemoved = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!nums[i + 1]) {
      return dupesRemoved;
    }

    if (nums[i] == nums[i + 1]) {
      dupesRemoved++;
      nums.splice(i, 1);
      i--;
    }
  }
  return dupesRemoved;
}
