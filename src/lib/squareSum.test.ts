import { describe, test, expect } from "vitest";
import { squareSum } from "./squareSum";

describe("#squareSum", () => {
  const testCases: TestCase[] = [[[1, 2], 5]];

  test.each(testCases)("%s -> %s", (input, output) => {
    expect(squareSum(input)).toEqual(output);
  });
});

type TestCase = [number[], number];
