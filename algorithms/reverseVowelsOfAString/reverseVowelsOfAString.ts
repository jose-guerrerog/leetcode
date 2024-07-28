const isVowel = (c: string) : boolean => {
  return c === 'a' || c === 'e' || c ==='i' || c ==='o' || c === 'u' || c === 'A' || c === 'E' || c ==='I' || c ==='O' || c === 'U';
}

function reverseVowels(s: string): string {
    const vowels: string[] = [];
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            vowels.push(s[i])
        }
    }
    let newIndex = vowels.length - 1;
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            res += vowels[newIndex];
            newIndex--;
        } else {
            res += s[i];
        }
    }

    return res;
};