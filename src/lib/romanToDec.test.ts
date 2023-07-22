import romanToDecimal from "./romanToDec";
import { describe, test, expect } from "vitest";

describe("#romanToDecimal", () => {
  const testCases = [
    {
      desc: "can convert 'I' to 1",
      input: "I",
      output: 1,
    },
  ];

  testCases.forEach(({ desc, input, output }) => {
    test(desc, () => {
      expect(romanToDecimal(input)).toEqual(output);
    });
  });
});
