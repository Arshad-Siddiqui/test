export function removeDuplicates(nums: number[]): number {
  let dupesRemoved = 0;

  for (let i = 0; i < nums.length; i++) {
    // Check if the next value is even defined
    if (!nums[i + 1]) {
      return dupesRemoved;
    }

    // if not then check if the next value is the same
    // if so then splice it out and check that index again
    if (nums[i] == nums[i + 1]) {
      dupesRemoved++;
      nums.splice(i, 1);
      i--;
    }
  }
  return dupesRemoved;
}
