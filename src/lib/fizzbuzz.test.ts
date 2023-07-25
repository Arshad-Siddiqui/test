import fizzbuzz from "./fizzbuzz";
import { describe, test, expect } from "vitest";

describe("#fizzbuzz", () => {
  const tests = [[0, 0]];

  test.each(tests)("%i turns to %i", (input, output) => {
    expect(fizzbuzz(input)).toEqual(output);
  });
});
