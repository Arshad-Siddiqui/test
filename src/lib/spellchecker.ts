/*

spellchecker

example input: string

output would highlight those words
tildes around incorrectly spelt words

examples: "words"	"words"
"wrds"	"~wrds~"

output: string

*/

export function spellchecker(word: string): string {
  const correctlySpeltWords = [
    "words",
    "word",
    "banana",
    "apple",
    "computer",
    "watch",
    "hello",
    "world",
  ];

  return correctlySpeltWords.some((element) => element == word)
    ? word
    : "~" + word + "~";
}

export function sentenceSpellchecker(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => spellchecker(word))
    .join(" ");
}
