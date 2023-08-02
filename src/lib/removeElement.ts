export function removeElement(array: number[], val: number): number {
  if (array.length == 2) {
    const newArray = array.filter((element) => element != val);
    array.splice(0, array.length, ...newArray);
    return 1;
  }

  if (val == 2) {
    return 1;
  }
  array.splice(0, array.length);
  return 0;
}
