export function filter(
  frequencies: number[],
  min: number = 40,
  max: number = 1000
): number[] {
  return frequencies.map((frequency) => {
    if (frequency > max) {
      return max;
    } else if (frequency < min) {
      return min;
    } else {
      return frequency;
    }
  });
}
