function lengthOfLastWord(s: string): number {

  const words = s.trim().split(' ');
  const lastWord = words[words.length - 1]

  return lastWord.length
};