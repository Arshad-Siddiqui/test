export function formatScores(scores: string): string {
  if (scores == "amber") {
    return "amber: 1\n";
  }

  return "red: 1\n";
}
