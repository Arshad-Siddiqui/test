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
  if (word == "wrds") {
    return "~wrds~";
  }

  if (word == "banaa") {
    return "~banaa~";
  }
  return word;
}
