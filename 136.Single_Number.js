/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let x = nums[0];

	for (let i = 1; i < nums.length; i++)
		x ^= nums[i];

	return x;
};

let nums0 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums0));
