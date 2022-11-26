/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const seen = {}
    for(const [index, ele] of nums.entries()) {
        const reminder = target - ele
        if(reminder in seen) {
            return [seen[reminder], index]
        }
        seen[ele] = index
    }
};
