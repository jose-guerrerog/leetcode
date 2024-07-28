function increasingTriplet(nums: number[]): boolean {
  let num1 = Number.MAX_VALUE;
  let num2 = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= num1) {
      num1 = nums[i];
      continue;
    }
    if (nums[i] <= num2) {
      num2 = nums[i];
      continue;
    }
    return true;
  }
  return false;
}
