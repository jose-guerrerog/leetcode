class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        arr = s.split()
        last_word = arr[len(arr) - 1]
        return len(last_word)