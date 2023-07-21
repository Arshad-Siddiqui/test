export function filter(
  frequencies: number[],
  { min, max }: { min: number; max: number } = { min: 40, max: 1000 }
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
