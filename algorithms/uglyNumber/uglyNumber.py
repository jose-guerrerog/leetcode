class Solution:
    def reduce_by_factor(self, num: int, factor: int) -> int:
        temp = num
        while temp % factor == 0:
            temp //= factor
        return temp
            

    def isUgly(self, n: int) -> bool:
        if n == 0:
            return False
        temp = n
        factors = [2, 3, 5]
        for factor in factors:
            temp =  self.reduce_by_factor(temp, factor)
        if temp == 1:
            return True
        return False
            
        