/**
 * 2864. Maximum Odd Binary Number
 * Easy
 * Topics
 * Companies
 * Hint
 *
 * You are given a binary string s that contains at least one '1'.
 *
 * You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
 *
 * Return a string representing the maximum odd binary number that can be created from the given combination.
 *
 * Note that the resulting string can have leading zeros.
 *
 *
 *
 * Example 1:
 *
 *	Input: s = "010"
 *	Output: "001"
 *	Explanation: Because there is just one '1', it must be in the last position.
 *	So the answer is "001".
 *
 * Example 2:
 *
 *	Input: s = "0101"
 *	Output: "1001"
 *	Explanation: One of the '1's must be in the last position.
 *	The maximum number that can be made with the remaining digits is "100".
 *	So the answer is "1001".
 *
 *
 *
 * Constraints:
 *
 *	1 <= s.length <= 100
 *	s consists only of '0' and '1'.
 *	s contains at least one '1'.
 */

/**
 * @param {string} s
 * @return {string}
 */

var maximumOddBinaryNumber = function(s) {
	let ones = 0;

	for (let i = 0; i < s.length; i++)
		if (s[i] == '1')
			ones++;

	return "1".repeat(ones - 1) + "0".repeat(s.length - 1 - (ones - 1)) + "1";
};

	let s0 = "010";
	let r0 = maximumOddBinaryNumber(s0);
	console.log("s0 = " + s0);
	console.log("r0 = " + r0);

	let s1 = "0101";
	let r1 = maximumOddBinaryNumber(s1);
	console.log("s1 = " + s1);
	console.log("r1 = " + r1);

	let s2 = "10010100111100101";
	let r2 = maximumOddBinaryNumber(s2);
	console.log("s2 = " + s2);
	console.log("r2 = " + r2);
