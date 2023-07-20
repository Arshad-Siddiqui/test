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
      output: "Check for any typo",
    },
    {
      desc: "rejects completely wrong strings",
      input: "asdlfjas;dfjlsakdfj",
      output: "Check for any typo",
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
    {
      desc: "can handle correct and incorrect values",
      input: "red, purple, green",
      output: "Check for any typo",
    },
    {
      desc: "should take any type casing",
      input: "Red, gReeN, aMBer, rED, reD",
      output: "amber: 1\nred: 3\ngreen: 1",
    },
    {
      desc: "correctly handles variable white space",
      input: " red,  green , amber,red",
      output: "amber: 1\nred: 2\ngreen: 1",
    },
  ];

  cases.forEach((testCase) => {
    it(testCase.desc, () => {
      expect(formatScores(testCase.input)).toEqual(testCase.output);
    });
  });
});
