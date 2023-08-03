import { describe, test, expect } from "vitest";
import { removeDuplicates } from "./removeDuplicates";

function testEach(testCases: TestCases) {
  test.each(testCases)(
    "%s -> %s output = %s",
    (input, expectedArray, output) => {
      expect(removeDuplicates(input)).toEqual(output);
      expect(input).toEqual(expectedArray);
    }
  );
}

type TestCases = [number[], number[], number][];

describe("#removeDuplicates", () => {
  describe("can return arrays of 1 length", () => {
    const testCases: TestCases = [
      [[1], [1], 0],
      [[2], [2], 0],
      [[1000], [1000], 0],
      [[367899], [367899], 0],
    ];

    testEach(testCases);
  });

  describe("can return arrays of any length with no duplicates", () => {
    const testCases: TestCases = [
      [[1, 2, 3, 4], [1, 2, 3, 4], 0],
      [[6, 8, 19, 52], [6, 8, 19, 52], 0],
      [[-8, 0, 14, 98], [-8, 0, 14, 98], 0],
    ];

    testEach(testCases);
  });

  describe("can remove duplicates", () => {
    const testCases: TestCases = [[[1, 1], [1], 1]];

    testEach(testCases);
  });
});
