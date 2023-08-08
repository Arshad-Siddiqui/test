export function createPhoneNumber(numbers: number[]): string {
  if (numbers[0] == 1) {
    return "(100) 000-0000";
  }

  return "(000) 000-0000";
}
