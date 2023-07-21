import { describe, test, expect } from "vitest";
import { filter } from "./filter";

describe("#filter", () => {
  const testCases = [
    {
      desc: "can handle 1 value in range",
      input: [45],
      output: [45],
    },
    {
      desc: "can handle multiple values in range",
      input: [88, 567, 342, 60, 999, 40],
      output: [88, 567, 342, 60, 999, 40],
    },
    {
      desc: "raises a value below 40 to 40",
      input: [20],
      output: [40],
    },
    {
      desc: "lowers a value above 1000 to 1000",
      input: [1001, 1000054, 50],
      output: [1000, 1000, 50],
    },
  ];

  testCases.forEach((testCase) => {
    test(testCase.desc, () => {
      expect(filter(testCase.input)).toEqual(testCase.output);
    });
  });
});
