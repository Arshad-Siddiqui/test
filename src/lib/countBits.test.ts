import { countBits } from "./countBits";
import { describe, test, expect } from "vitest";

describe("#countBits", () => {
  const cases = [[1234, 5]];

  test.each(cases)("%s -> %s", (input, output) => {
    expect(countBits(input)).toEqual(output);
  });
});
