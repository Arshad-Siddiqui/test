export function createPhoneNumber(numbers: number[]): string {
  const firstBlock = numbers.slice(0, 3).join("");
  const secondBlock = numbers.slice(3, 6).join("");
  const thirdBlock = numbers.slice(6, 10).join("");
  return `(${firstBlock}) ${secondBlock}-${thirdBlock}`;
}
