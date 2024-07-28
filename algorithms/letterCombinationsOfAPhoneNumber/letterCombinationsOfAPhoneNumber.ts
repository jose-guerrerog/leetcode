const map = new Map<string, string[]>([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);

const combineTwoArrays = (array1: string[], array2: string[]): string[] => {
  const res: string[] = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      res.push(array1[i] + array2[j]);
    }
  }
  return res;
};

function letterCombinations(digits: string): string[] {
  const arrayDigits = digits.split("");
  if (!arrayDigits.length) {
    return [];
  }
  let res: string[] = map.get(arrayDigits[0]) ?? [];

  for (let i = 1; i < arrayDigits.length; i++) {
    res = combineTwoArrays(res, map.get(arrayDigits[i]) ?? []);
  }
  return res;
}
