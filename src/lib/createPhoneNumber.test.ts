import { createPhoneNumber } from "./createPhoneNumber";
import { test, describe, expect } from "vitest";

describe("#createPhoneNumber", () => {
  const testCases: TestCase[] = [
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "(000) 000-0000"],
    [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "(100) 000-0000"],
  ];

  test.each(testCases)("%s -> %s", (input, output) => {
    expect(createPhoneNumber(input)).toEqual(output);
  });
});

type TestCase = [number[], string];
