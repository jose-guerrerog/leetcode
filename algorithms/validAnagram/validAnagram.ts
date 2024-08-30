function isAnagram(s: string, t: string): boolean {

  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
      const num = map.get(s[i]) ?? 0;
      map.set(s[i], num + 1);
  }

  for (let i = 0; i < t.length; i++) {
      const num = map.get(t[i]) ?? 0;
      if (num === 0) {
          return false;
      }
      map.set(t[i], num - 1);
  }

  const res = [...map.keys()];
  for (let i = 0; i < res.length; i++) {
      if (map.get(res[i]) ?? 0 > 0) {
          return false;
      }
  }
  return true;
};