export function formatScores(scores: string): string {
  const colours: { [key: string]: number } = {
    amber: 0,
    red: 0,
    green: 0,
  };
  const scoreArr = scores.split(", ");

  if (!scoreArr.every((score) => score in colours)) {
    return "Check for any typo";
  }

  scoreArr.forEach((score) => {
    if (score in colours) {
      colours[score]++;
    }
  });
  const entries = Object.entries(colours);

  return entries
    .filter((entry) => entry[1] != 0)
    .map((entry) => `${entry[0]}: ${entry[1]}`)
    .join("\n");
}
