import { describe, it, expect } from "vitest";
import { formatScores } from "./scores";

describe("#formatScores", () => {
  const cases = [
    {
      desc: "returns 1 red",
      input: "red",
      output: "red: 1\n",
    },
    {
      desc: "returns 1 amber",
      input: "amber",
      output: "amber: 1\n",
    },
  ];

  cases.forEach((testCase) => {
    it(testCase.desc, () => {
      expect(formatScores(testCase.input)).toEqual(testCase.output);
    });
  });
});
