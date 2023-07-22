import romanToDecimal from "./romanToDec";
import { describe, test, expect } from "vitest";

describe("#romanToDecimal", () => {
  const simpleTestCases: Array<[string, number]> = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];

  test.each(simpleTestCases)("converts %s to %i", (input, output) => {
    expect(romanToDecimal(input)).toEqual(output);
  });
});
