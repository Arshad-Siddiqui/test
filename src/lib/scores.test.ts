import { describe, it, expect } from "vitest";
import { formatScores } from "./scores";

describe("#formatScores", () => {
  const testCases = [
    {
      desc: "returns a string",
      input: "red",
      output: "red: 1\n",
    },
  ];

  testCases.forEach((testCase) => {
    it(testCase.desc, () => {
      expect(formatScores(testCase.input)).toEqual(testCase.output);
    });
  });
});
