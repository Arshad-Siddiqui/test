import { describe, test, expect } from "vitest";
import { filter } from "./filter";

describe("#filter", () => {
  const testCases = [
    {
      desc: "can handle 1 value in range",
      input: [45],
      output: [45],
    },
  ];

  testCases.forEach((testCase) => {
    test(testCase.desc, () => {
      expect(filter(testCase.input)).toEqual(testCase.output);
    });
  });
});
