import { describe, test, expect, Test } from "vitest";
import { removeElement } from "./removeElement";

describe("#removeElement", () => {
  const testCases: TestCase[] = [[[1], 1, [], 0]];

  test.each(testCases)(
    "%s array and %s val -> %s",
    (array, val, expectedArray, output) => {
      expect(removeElement(array, val)).toEqual(output);
      expect(array).toEqual(expectedArray);
    }
  );
});

type TestCase = [number[], number, number[], number];
