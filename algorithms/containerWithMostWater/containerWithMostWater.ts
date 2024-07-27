function maxArea(height: number[]): number {
  let ptr_lo = 0;
  let ptr_hi = height.length - 1;
  let maxiArea = 0;

  while (ptr_lo <= ptr_hi) {
    if (height[ptr_lo] <= height[ptr_hi]) {
      maxiArea = Math.max(maxiArea, height[ptr_lo] * (ptr_hi - ptr_lo))
      ptr_lo++;
      continue;
    }

    if (height[ptr_lo] > height[ptr_hi]) {
      maxiArea = Math.max(maxiArea, height[ptr_hi] * (ptr_hi - ptr_lo))
      ptr_hi--;
      continue;
    }
  }

  return maxiArea;
};