import { describe, it, expect } from "vitest";
import { formatScores } from "./scores";

describe("#formatScores", () => {
  const testCases = [
    {
      desc: "returns a string",
      input: "someString",
      output: "some string",
    },
  ];

  testCases.forEach((testCase) => {
    it(testCase.desc, () => {
      expect(formatScores(testCase.input)).toEqual(testCase.output);
    });
  });
});
