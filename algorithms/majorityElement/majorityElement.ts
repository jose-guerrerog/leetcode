function majorityElement(nums: number[]): number {
  let maxIndex = -1;
  let maxNumber = -1;
  const map = new Map<string, number>();

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i].toString();
    if (!map.has(key)) {
      map.set(key, 1);
      if (maxNumber < 1) {
        maxNumber = 1;
        maxIndex = nums[i];
      }
    } else {
      const num: number = map.get(key) ?? 0;
      map.set(key, num + 1);
      if (num + 1 > maxNumber) {
        maxIndex = nums[i];
        maxNumber = num + 1;
      }
    }
  }

  return maxIndex;
}
