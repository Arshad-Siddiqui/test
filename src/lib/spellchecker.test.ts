import { test, describe, expect } from "vitest";
import { spellchecker } from "./spellchecker";

describe("#spellchecker", () => {
  const testCases = [["words", "words"]];

  test.each(testCases)("%s -> %s", (input, output) => {
    expect(spellchecker(input)).toEqual(output);
  });
});
