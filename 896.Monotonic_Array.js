/**
 * 896. Monotonic Array
 * Easy
 * Topics
 * Companies
 *
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 *
 * An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
 * An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 *
 * Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *	Input: nums = [1,2,2,3]
 *	Output: true
 *
 * Example 2:
 *
 *	Input: nums = [6,5,4,4]
 *	Output: true
 *
 * Example 3:
 *
 *	Input: nums = [1,3,2]
 *	Output: false
 *
 *
 * Constraints:
 *
 *	1 <= nums.length <= 10^5
 *	-10^5 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// var isMonotonic = function(nums) {
function isMonotonic(nums) {
	let incr = 0;
	let decr = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] > nums[i])
			incr = 1;
		if (nums[i + 1] < nums [i])
			decr = 1;
		if (incr == 1 && decr == 1)
			return false;
	}

	return true;
};

let a = [1, 2, 2, 3];
console.log(isMonotonic(a));

let b = [6, 5, 4, 4];
console.log(isMonotonic(b));

let c = [1, 3, 2];
console.log(isMonotonic(c));

let d = [4, 4, 4, 4];
console.log(isMonotonic(d));
