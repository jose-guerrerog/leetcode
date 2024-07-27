function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
      const c = s[i]

      if (c === '(' || c=== '[' || c ==='{' ) {
          stack.push(c)
      } else {
          const top = stack.pop()
          if (c === ')' && top !== '(' || c === ']' && top !== '[' || c === '}' && top !== '{') {
              return false;
          }
      }
  }

  if (stack.length === 0) {
      return true;
  }

  return false;
};