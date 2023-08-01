export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  nums1.splice(
    0,
    nums1.length,
    ...[...nums1.slice(0, m), ...nums2].sort((a, b) => a - b)
  );
}
