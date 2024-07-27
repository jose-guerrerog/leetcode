function strStr(haystack: string, needle: string): number {
  const partitions = haystack.split(needle)
  if (partitions.length === 1) {
      return -1;
  }
  return partitions[0].length;
};