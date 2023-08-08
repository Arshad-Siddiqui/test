import { createPhoneNumber } from "./createPhoneNumber";
import { test, describe, expect } from "vitest";

describe("#createPhoneNumber", () => {
  const testCases: TestCase[] = [
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "(000) 000-0000"],
    [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "(100) 000-0000"],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "(123) 456-7890"],
    [[8, 5, 9, 4, 5, 6, 7, 2, 2, 3], "(859) 456-7223"],
  ];

  test.each(testCases)("%s -> %s", (input, output) => {
    expect(createPhoneNumber(input)).toEqual(output);
  });
});

type TestCase = [number[], string];
