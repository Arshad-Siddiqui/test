export function formatScores(scores: string): string {
  if (scores == "amber") {
    return "amber: 1";
  }

  if (scores == "green") {
    return "green: 1";
  }

  if (scores == "red") {
    return "red: 1";
  }

  return "";
}
