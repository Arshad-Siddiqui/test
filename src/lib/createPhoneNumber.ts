export function createPhoneNumber(numbers: number[]): string {
  const firstBlock = `(${numbers[0]}${numbers[1]}${numbers[2]})`;
  const secondBlock = `${numbers[3]}${numbers[4]}${numbers[5]}`;
  const thirdBlock = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  return firstBlock + " " + secondBlock + "-" + thirdBlock;
}
