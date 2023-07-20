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
    {
      desc: "can handle 2 reds",
      input: "red, red",
      output: "red: 2",
    },
    {
      desc: "can handle 2 different colours",
      input: "red, green",
      output: "red: 1\ngreen: 1",
    },
    {
      desc: "can handle a range of different colours",
      input: "red, green, red, green, amber, amber, amber, green, amber",
      output: "amber: 4\nred: 2\ngreen: 3",
    },
  ];

  cases.forEach((testCase) => {
    it(testCase.desc, () => {
      expect(formatScores(testCase.input)).toEqual(testCase.output);
    });
  });
});
