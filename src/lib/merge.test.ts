import { describe, test, expect } from "vitest";
import { merge } from "./merge";

describe("#merge", () => {
  const testCases: TestCases = [
    [[1, 0], 1, [1], 1, [1, 1]],
    [[1, 0], 1, [2], 1, [1, 2]],
    [[2, 0], 1, [1], 1, [1, 2]],
    [[4, 5, 6, 0, 0, 0], 3, [1, 2, 2], 3, [1, 2, 2, 4, 5, 6]],
    [[-1, 0, 1, 0, 0], 3, [3, 5], 2, [-1, 0, 1, 3, 5]],
    [[-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2, [-1, -1, -1, 0, 0, 0]],
  ];

  test.each(testCases)(
    "%s of length %s and %s of length %s -> %s",
    (nums1, num1Length, nums2, num2Length, output) => {
      merge(nums1, num1Length, nums2, num2Length);
      expect(nums1).toEqual(output);
    }
  );
});

type TestCase = [number[], number, number[], number, number[]];
type TestCases = TestCase[];
