import { describe, test, expect, it } from "vitest";
import { removeDuplicates } from "./removeDuplicates";

describe("#removeDuplicates", () => {
  it("Can return arrays of 1 length", () => {
    const testCases = [[[1], [1]]];

    test.each(testCases)("%s -> %s", (input, output) => {
      expect(removeDuplicates(input)).toEqual(output);
    });
  });
});
