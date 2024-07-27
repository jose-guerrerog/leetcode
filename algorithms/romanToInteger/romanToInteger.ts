const romanNumber = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I": {
        if (s[i + 1] === "V") {
          count += 4;
          i += 1;
          continue;
        }
        if (s[i + 1] === "X") {
          count += 9;
          i += 1;
          continue;
        }
      }
      case "X": {
        if (s[i + 1] === "L") {
          count += 40;
          i += 1;
          continue;
        }
        if (s[i + 1] === "C") {
          count += 90;
          i += 1;
          continue;
        }
      }
      case "C": {
        if (s[i + 1] === "D") {
          count += 400;
          i += 1;
          continue;
        }
        if (s[i + 1] === "M") {
          count += 900;
          i += 1;
          continue;
        }
      }

      default: {
        count += romanNumber[s[i]];
      }
    }
  }

  return count;
}
