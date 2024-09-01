/**
 * 413. Arithmetic Slices
 * Medium
 * Topics
 * Companies
 *
 * An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
 *
 *	For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
 *
 * Given an integer array nums, return the number of arithmetic subarrays of nums.
 *
 * A subarray is a contiguous subsequence of the array.
 *
 *
 *
 * Example 1:
 *
 *	Input: nums = [1,2,3,4]
 *	Output: 3
 *	Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
 *
 * Example 2:
 *
 *	Input: nums = [1]
 *	Output: 0
 *
 *
 *
 * Constraints:
 *
 *	1 <= nums.length <= 5000
 *	-1000 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 1:	0
// 2:	0
// 3:	1	1(3)
// 4:	3	1(4) + 2(3)
// 5:	6	1(5) + 2(4) + 3(3)
// 6:	10	1(6) + 2(5) + 3(4) + 4(6)
// 7:	15	1(7) + 2(6) + 3(5) + 4(4) + 5(3)
// 8:	21	1(8) + 2(7) + 3(6) + 4(5) + 5(4) + 6(3)
// 9:	28	1(9) + 2(8) + 3(7) + 4(6) + 5(5) + 6(4) + 7(3)

var numberOfArithmeticSlices = function(nums) {
	if (nums.length == 1 || nums.length == 2)
		return 0;
	
	let result = 0;

	let i = 0;
	
	while (i < nums.length) {
		let diff = nums[i + 1] - nums[i];
		let counter = 1;
		i++;

		while (i + 1 < nums.length && nums[i + 1] - nums[i] == diff) {
			counter++;
			i++;
		}

		if (counter > 1) {
			let sum = 0;

			for (let j = 1; j < counter; j++)
				sum += j;

			result += sum;
		}
		
		if (i == nums.length - 1)
			i++;
	}

	return result;
};

let n = [1, 2, 3, 4];
console.log("n[] = {1, 2, 3, 4}");
console.log("result : " + numberOfArithmeticSlices(n) + '\n');

n = [1];
console.log("n[] = {1}");
console.log("result : " + numberOfArithmeticSlices(n) + '\n');

n = [1, 2, 3, 4, 6];
console.log("n[] = {1, 2, 3, 4, 6}");
console.log("result : " + numberOfArithmeticSlices(n) + '\n');

n = [1, 2, 3, 4, 6, 8, 10];
console.log("n[] = {1, 2, 3, 4, 6, 8, 10}");
console.log("result : " + numberOfArithmeticSlices(n) + '\n');

n = [1, 2, 3, 4, 6, 8, 10, 11, 13, 15];
console.log("n[] = {1, 2, 3, 4, 6, 8, 10, 11, 13, 15}");
console.log("result : " + numberOfArithmeticSlices(n) + '\n');
