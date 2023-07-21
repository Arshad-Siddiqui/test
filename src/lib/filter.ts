export function filter(frequencies: number[]): number[] {
  return frequencies.map((frequency) => {
    if (frequency > 1000) {
      return 1000;
    } else if (frequency < 40) {
      return 40;
    } else {
      return frequency;
    }
  });
}
