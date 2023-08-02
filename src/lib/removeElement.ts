export function removeElement(array: number[], val: number): number {
  const newArray = array.filter((element) => element != val);
  const differenceInLength = array.length - newArray.length;
  array.splice(0, array.length, ...newArray);
  return differenceInLength;
}
