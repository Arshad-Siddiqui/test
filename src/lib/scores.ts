export function formatScores(scores: string): string {
  const scoreArr = scores.split(", ");
  const colours: { [key: string]: number } = {
    amber: 0,
    red: 0,
    green: 0,
  };

  scoreArr.forEach((score) => {
    if (score in colours) {
      colours[score]++;
    }
  });
  const entries = Object.entries(colours);

  return entries
    .filter((entry) => entry[1] != 0)
    .map((entry) => `${entry[0]}: ${entry[1]}`)
    .join("");
}
