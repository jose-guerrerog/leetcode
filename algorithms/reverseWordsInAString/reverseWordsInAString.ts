function reverseWords(s: string): string {

  return s.trim().split(/[\s,\t,\n]+/).reverse().join(' ');
};