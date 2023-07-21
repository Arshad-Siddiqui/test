export function filter(frequencies: number[]): number[] {
  return frequencies.map((frequency) => (frequency > 40 ? frequency : 40));
}
