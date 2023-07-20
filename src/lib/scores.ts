export function formatScores(scores: string): string {
  const colours = ["amber", "green", "red"];
  for (let i = 0; i < colours.length; i++) {
    if (scores == colours[i]) {
      return `${colours[i]}: 1`;
    }
  }
  return "";
}
