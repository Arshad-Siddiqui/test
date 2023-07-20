export function formatScores(scores: string): string {
  if (scores == "amber") {
    return "amber: 1";
  }

  if (scores == "green") {
    return "green: 1";
  }
  return "red: 1";
}
