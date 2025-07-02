class Solution:
    def getPrefix(self, str1: str, str2: str) -> str:
        res = ''
        n = min(len(str1), len(str2))
        for i in range(n):
            if str1[i] == str2[i]:
                res += str1[i]
            else:
                break
        return res

    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = strs[0]
        for i in range(1, len(strs)):
            res = self.getPrefix(res, strs[i])
            if not res:
                break
        return res
