import { describe, test, expect } from "vitest";
import { removeDuplicates } from "./removeDuplicates";

describe("#removeDuplicates", () => {
  describe("Can return arrays of 1 length", () => {
    const testCases: TestCases = [[[1], [1], 0]];

    test.each(testCases)("%s -> %output", (input, expectedArray, output) => {
      expect(removeDuplicates(input)).toEqual(output);
      expect(input).toEqual(expectedArray);
    });
  });
});

type TestCases = [[number[], number[], number]];
