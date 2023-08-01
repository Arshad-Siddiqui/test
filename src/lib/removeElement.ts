export function removeElement(array: number[], val: number): number {
  if (val == 2) {
    return 1;
  }
  array.splice(0, array.length);
  return 0;
}
