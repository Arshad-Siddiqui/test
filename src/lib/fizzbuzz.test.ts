import fizzbuzz from "./fizzbuzz";
import { describe, test, expect } from "vitest";

describe("#fizzbuzz", () => {
  const tests: Array<[number, number | string]> = [
    [-3, "fizz"],
    [-2, -2],
    [-5, "buzz"],
    [0, 0],
    [1, 1],
    [2, 2],
    [3, "fizz"],
    [4, 4],
    [5, "buzz"],
    [6, "fizz"],
    [7, 7],
    [8, 8],
    [9, "fizz"],
    [10, "buzz"],
    [11, 11],
    [12, "fizz"],
    [13, 13],
    [14, 14],
    [15, "fizzbuzz"],
    [99, "fizz"],
    [100, "buzz"],
    [300, "fizzbuzz"],
    [100_000, "buzz"],
  ];

  test.each(tests)("%i -> %s", (input, output) => {
    expect(fizzbuzz(input)).toEqual(output);
  });
});
