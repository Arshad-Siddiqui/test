import { test, describe, expect } from "vitest";
import { spellchecker } from "./spellchecker";

describe("#spellchecker", () => {
  const testCases = [
    ["words", "words"],
    ["wrds", "~wrds~"],
    ["word", "word"],
    ["banana", "banana"],
    ["banaa", "~banaa~"],
    ["apple", "apple"],
    ["computer", "computer"],
    ["watch", "watch"],
  ];

  test.each(testCases)("%s -> %s", (input, output) => {
    expect(spellchecker(input)).toEqual(output);
  });
});
