import fizzbuzz from "./fizzbuzz";
import { describe, test, expect } from "vitest";

describe("#fizzbuzz", () => {
  const tests: Array<[number, number | string]> = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, "fizz"],
    [4, 4],
    [5, "buzz"],
    [6, "fizz"],
  ];

  test.each(tests)("%i -> %s", (input, output) => {
    expect(fizzbuzz(input)).toEqual(output);
  });
});
