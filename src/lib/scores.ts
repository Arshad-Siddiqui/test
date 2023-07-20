export function formatScores(scores: string): string {
  const scoreArr = scores.split(", ");
  const colours = {
    amber: 0,
    red: 0,
    green: 0,
  };

  scoreArr.forEach((score) => {
    if (score == "amber") {
      colours.amber++;
    }

    if (score == "red") {
      colours.red++;
    }

    if (score == "green") {
      colours.green++;
    }
  });
  const entries = Object.entries(colours);
  console.log(entries);
  const filteredEntries = entries.filter((entry) => entry[1] != 0);

  console.log(filteredEntries);

  return filteredEntries.reduce((accumulator: string, current) => {
    return accumulator + `${current[0]}: ${current[1]}`;
  }, "");
}
