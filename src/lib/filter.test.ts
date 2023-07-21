import { describe, test, expect } from "vitest";
import { filter } from "./filter";

describe("#filter", () => {
  test("can handle 1 value in range", () => {
    filter([45]);
  });
});
