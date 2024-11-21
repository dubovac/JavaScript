/**
 * 2006. Count Number of Pairs With Absolute Difference K
 * Easy
 * Topics
 * Companies
 * Hint
 *
 * Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
 *
 * The value of |x| is defined as:
 *
 *	x if x >= 0.
 *	-x if x < 0.
 *
 *
 *
 * Example 1:
 *
 *	Input: nums = [1,2,2,1], k = 1
 *	Output: 4
 *	Explanation: The pairs with an absolute difference of 1 are:
 *	- [1,2,2,1]
 *	- [1,2,2,1]
 *	- [1,2,2,1]
 *	- [1,2,2,1]
 *
 * Example 2:
 *
 *	Input: nums = [1,3], k = 3
 *	Output: 0
 *	Explanation: There are no pairs with an absolute difference of 3.
 *
 * Example 3:
 *
 *	Input: nums = [3,2,1,5,4], k = 2
 *	Output: 3
 *	Explanation: The pairs with an absolute difference of 2 are:
 *	- [3,2,1,5,4]
 *	- [3,2,1,5,4]
 *	- [3,2,1,5,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countKDifference(nums, k) {	// var countKDifference = function(nums, k) {
	let r = 0;

	for (let i = 0; i < nums.length - 1; i++)
		for (let j = i + 1; j < nums.length; j++) {
			let x = nums[j] - nums[i];
			if (x < 0)
				x = -x;
			if (x == k)
				r++;
		}

	return r;
};

let n = [1, 2, 2, 1];
let k = 1;
console.log(countKDifference(n, k));

n = [1, 3];
k = 3;
console.log(countKDifference(n, k));

n = [3, 2, 1, 5, 4];
k = 2;
console.log(countKDifference(n, k));
