import { arrayDiff } from "./arrayDiff";
import { describe, expect, test } from "vitest";

describe("arrayDiff", () => {
  describe("should return an array of differences", () => {
    const testCases = [
      [[1, 2, 3], [], [1, 2, 3]],
      [[1, 2, 3], [5], [1, 2, 3]],
      [
        [1, 2, 3],
        [4, 5, 6],
        [1, 2, 3],
      ],
    ];

    test.each(testCases)("%p", (a, b, expected) => {
      const result = arrayDiff(a, b);
      expect(result).toEqual(expected);
    });
  });
});
