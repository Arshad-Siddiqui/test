import { describe, test, expect } from "vitest";
import { merge } from "./merge";

describe("#merge", () => {
  const testCases: TestCases = [[[1, 0], 1, [1], 1, [1, 1]]];

  test.each(testCases)(
    "%s %s %s %s -> %s",
    (nums1, num1Length, nums2, num2Length, output) => {
      merge(nums1, num1Length, nums2, num2Length);
      expect(nums1).toEqual(output);
    }
  );
});

type TestCase = [number[], number, number[], number, number[]];
type TestCases = TestCase[];
