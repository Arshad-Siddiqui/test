import romanToDecimal from "./romanToDec";
import { describe, test, expect, Test } from "vitest";

describe("#romanToDecimal", () => {
  const simpleTestCases: TestCases = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];

  const complexTestCases: TestCases = [
    ["II", 2],
    ["III", 3],
    // ["IV", 4],
    ["VI", 6],
    ["VII", 7],
    ["VIII", 8],
    ["XIII", 13],
    ["XV", 15],
    ["XVII", 17],
    ["MMXXIII", 2023],
  ];

  const subtractionTestCases: TestCases = [
    ["IV", 4],
    ["IX", 9],
  ];

  const testCases: TestCases = [
    ...simpleTestCases,
    ...complexTestCases,
    ...subtractionTestCases,
  ];

  test.each(testCases)("converts %s to %i", (input, output) => {
    expect(romanToDecimal(input)).toEqual(output);
  });
});

type TestCases = Array<[string, number]>;
