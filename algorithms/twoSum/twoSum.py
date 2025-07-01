class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i in range(0, len(nums)):
            key = target - nums[i]
            if key in seen:
                return [seen[key], i]
            else:
                seen[nums[i]] = i