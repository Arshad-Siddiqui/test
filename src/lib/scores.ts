export function formatScores(scores: string): string {
  // Example of scores: "red, green, amber, red"
  const scoreArr = scores.split(", ");
  const colours: { [key: string]: number } = {
    amber: 0,
    red: 0,
    green: 0,
  };

  const colourArr = Object.keys(colours);
  scoreArr.forEach((score) => {
    colourArr.forEach((colour) => {
      // Fix the variable name here
      if (score === colour) {
        colours[colour]++;
      }
    });
  });
  const entries = Object.entries(colours);
  console.log(entries);
  const filteredEntries = entries.filter((entry) => entry[1] != 0);

  console.log(filteredEntries);

  return filteredEntries.reduce((accumulator: string, current) => {
    return accumulator + `${current[0]}: ${current[1]}`;
  }, "");
}
