function twoSum(nums: number[], target: number): number[] {
  let idx1, idx2;
  const map = new Map<number, number>();

  nums.forEach((num: number, idx: number) => {
      const num2: number = target - num;
      if (!map.has(num2)) {
          map.set(num, idx)
      } else {
          idx1 = map.get(num2);
          idx2 = idx;
      }
  })
  
  return [idx1, idx2]
};