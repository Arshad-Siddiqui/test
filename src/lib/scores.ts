export function formatScores(scores: string): string {
  const scoreArr = scores.split(", ");
  const colours: { [key: string]: number } = {
    amber: 0,
    red: 0,
    green: 0,
  };

  const colourArr = Object.keys(colours);
  scoreArr.forEach((score) => {
    colourArr.forEach((colour) => {
      if (score === colour) {
        colours[colour]++;
      }
    });
  });
  const entries = Object.entries(colours);

  return entries
    .filter((entry) => entry[1] != 0)
    .map((entry) => `${entry[0]}: ${entry[1]}`)
    .join("");
}
