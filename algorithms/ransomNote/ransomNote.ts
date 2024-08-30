function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();

  for (let i = 0; i < magazine.length; i++) {
      if (!map.has(magazine[i])) {
          map.set(magazine[i], 1)
      } else {
          const num: number = map.get(magazine[i]) ?? 0;
          map.set(magazine[i], num + 1)
      }
  }

  for (let i = 0; i < ransomNote.length; i++) {
      if (map.has(ransomNote[i])) {
          const num: number = map.get(ransomNote[i]) ?? 0;
          if (num === 0) {
              return false;
          }
          map.set(ransomNote[i], num - 1);
      } else {
          return false;
      }
  }

  return true;
};