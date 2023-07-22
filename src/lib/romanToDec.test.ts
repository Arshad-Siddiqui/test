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
  ];

  testCases.forEach(({ desc, input, output }) => {
    test(desc, () => {
      expect(romanToDecimal(input)).toEqual(output);
    });
  });
});
