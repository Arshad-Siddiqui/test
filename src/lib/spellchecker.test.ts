import { test, describe, expect } from "vitest";
import { sentenceSpellchecker, spellchecker } from "./spellchecker";

describe("#spellchecker", () => {
  const testCases = [
    ["words", "words"],
    ["wrds", "~wrds~"],
    ["word", "word"],
    ["banana", "banana"],
    ["banaa", "~banaa~"],
    ["anana", "~anana~"],
    ["apple", "apple"],
    ["computer", "computer"],
    ["watch", "watch"],
  ];

  test.each(testCases)("%s -> %s", (input, output) => {
    expect(spellchecker(input)).toEqual(output);
  });
});

describe("#sentenceSpellchecker", () => {
  const testCases = [["hello world", "hello world"]];

  test.each(testCases)("%s -> %s", (input, output) => {
    expect(sentenceSpellchecker(input)).toEqual(output);
  });
});
