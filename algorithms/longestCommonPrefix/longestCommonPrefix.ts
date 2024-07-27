const common2Strs = (s0: string, s1: string): string => {
  const n = s0.length;
  const m = s1.length;
  let count = 0;

  for (let i = 0; i < Math.min(n, m); i++) {
      if (s0[i] !== s1[i]) {
          break;
      }
      count++;
  }
  if (count === 0) {
      return '';
  }
  return s0.slice(0, count)
}

function longestCommonPrefix(strs: string[]): string {
  let commonStr = strs[0];

  if (strs.length === 1) {
      return strs[0];
  }
  for (let i = 1; i < strs.length; i++) {
      commonStr = common2Strs(commonStr, strs[i])
      if (commonStr === '') {
          break;
      }
  }
  return commonStr;
};