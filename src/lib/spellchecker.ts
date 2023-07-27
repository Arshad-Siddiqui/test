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
  ];

  if (correctlySpeltWords.some((element) => element == word)) {
    return word;
  } else {
    return "~" + word + "~";
  }
}
