/**
 * 387. First Unique Character in a String
 * Easy
 * Topics
 * Companies
 *
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 *
 *
 *
 * Example 1:
 *
 *	Input: s = "leetcode"
 *	Output: 0
 *	Explanation:
 *	The character 'l' at index 0 is the first character that does not occur at any other index.
 *
 * Example 2:
 *
 *	Input: s = "loveleetcode"
 *	Output: 2
 *
 * Example 3:
 *
 *	Input: s = "aabb"
 *	Output: -1
 *
 *
 *
 * Constraints:
 *
 *	1 <= s.length <= 10^5
 *	s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let t = new Array(26);

	for (let i = 0; i < 26; i++)
		t[i] = 0;

	for (let i = 0; i < s.length; i++)
		t[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

	for (let i = 0; i < s.length; i++)
		if (t[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 1)
			return i;

	return -1;
};

let s0 = "leetcode";
console.log(firstUniqChar(s0));

let s1 = "loveleetcode";
console.log(firstUniqChar(s1));

let s2 = "aabb";
console.log(firstUniqChar(s2));
