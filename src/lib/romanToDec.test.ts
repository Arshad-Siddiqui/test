import romanToDecimal from "./romanToDec";
import { describe, test, expect } from "vitest";

describe("#romanToDecimal", () => {
  const testCases = [
    {
      desc: "can convert 'I' to 1",
      input: "I",
      output: 1,
    },
    {
      desc: "can convert 'V' to 5",
      input: "V",
      output: 5,
    },
    {
      desc: "can convert 'X' to 10",
      input: "X",
      output: 10,
    },
    {
      desc: "can convert 'L' to 50",
      input: "L",
      output: 50,
    },
    {
      desc: "can convert 'C' to 100",
      input: "C",
      output: 100,
    },
    {
      desc: "can convert 'D' to 500",
      input: "D",
      output: 500,
    },
    {
      desc: "can convert 'M' to 1000",
      input: "M",
      output: 1000,
    },
  ];

  testCases.forEach(({ desc, input, output }) => {
    test(desc, () => {
      expect(romanToDecimal(input)).toEqual(output);
    });
  });
});
