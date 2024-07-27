function isPalindrome(x: number): boolean {
  const reverseX: number = parseInt(x.toString().split('').reverse().join(''));
  return x === reverseX
};