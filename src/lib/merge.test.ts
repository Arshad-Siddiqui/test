import { describe, test, expect } from "vitest";
import { merge } from "./merge";

describe("#merge", () => {
  const testCases = [[[1], 1, [1], 1, [1, 1]]];

  test.each(testCases)(
    "%s %s %s %s -> %s",
    (nums1, num1Length, nums2, num2Length, output) => {
      expect(merge(nums1, num1Length, nums2, num2Length)).toEqual(output);
    }
  );
});
