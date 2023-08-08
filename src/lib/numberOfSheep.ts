export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.reduce(
    (accumulator, current) => (current ? accumulator + 1 : accumulator),
    0
  );
}
