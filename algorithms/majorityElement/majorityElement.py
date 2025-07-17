class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        max_key = -1
        max_number = -1
        count_map = defaultdict(int)

        for num in nums:
            count_map[num] += 1
            if count_map[num] > max_number:
                max_number = count_map[num]
                max_key = num

        return max_key
        