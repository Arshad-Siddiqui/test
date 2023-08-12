import { describe, test, expect } from "vitest";
import { findOutlier } from "./findOutlier";

describe("#findOutlier", () => {
  const cases: Cases[] = [
    [[1, 2, 3], 2],
    [[2, 4, 5], 5],
  ];

  test.each(cases)("%s -> %s", (input, output) => {
    expect(findOutlier(input)).toEqual(output);
  });
});

type Cases = [number[], number];
