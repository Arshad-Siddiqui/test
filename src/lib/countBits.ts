export function countBits(n: number): number {
  return n
    .toString(2)
    .split("")
    .reduce((acc: number, cur: string) => acc + parseInt(cur), 0);
}
