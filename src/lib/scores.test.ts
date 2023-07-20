import { describe, it, expect } from "vitest";
import { formatScores } from "./scores";

describe("#formatScores", () => {
  const cases = [
    {
      desc: "returns 1 red",
      input: "red",
      output: "red: 1",
    },
    {
      desc: "returns 1 amber",
      input: "amber",
      output: "amber: 1",
    },
    {
      desc: "returns 1 green",
      input: "green",
      output: "green: 1",
    },
    {
      desc: "rejects wrong colours",
      input: "purple",
      output: "",
    },
    {
      desc: "rejects completely wrong strings",
      input: "asdlfjas;dfjlsakdfj",
      output: "",
    },
  ];

  cases.forEach((testCase) => {
    it(testCase.desc, () => {
      expect(formatScores(testCase.input)).toEqual(testCase.output);
    });
  });
});
