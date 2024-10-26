/**
 * 567. Permutation in String
 * Medium
 * Topics
 * Companies
 * Hint
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 *
 *
 * Example 1:
 *
 *	Input: s1 = "ab", s2 = "eidbaooo"
 *	Output: true
 *	Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 *
 *	Input: s1 = "ab", s2 = "eidboaoo"
 *	Output: false
 *
 *
 *
 * Constraints:
 *
 *	1 <= s1.length, s2.length <= 10^4
 *	s1 and s2 consist of lowercase English letters.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
	let l1 = s1.length;
	let l2 = s2.length;

	if (l1 == 0)
		return true;

	if (l1 > l2)
		return false;

	let t1 = new Array(26);
	let t2 = new Array(26);

	for (let i = 0; i < 26; i++)
		t1[i] = 0;

	for (let i = 0; i < l1; i++)
		t1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

	for (let i = 0; i < l2 - l1 + 1; i++) {
		for (let i = 0; i < 26; i++)
			t2[i] = 0;

		for (let j = 0; j < l1; j++)
			t2[s2[i + j].charCodeAt(0) - 'a'.charCodeAt(0)]++;

		let t = 1;
		
		for (let j = 0; j < 26; j++)
			if (t1[j] != t2[j]) {
				t = 0;
				break;
			}

		if (t)
			return true;
	}
	
	return false;
};

let s1 = "ab";
let s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));

s1 = "ab";
s2 = "eidboaoo";
console.log(checkInclusion(s1, s2));

s1 = "adc";
s2 = "dcda";
console.log(checkInclusion(s1, s2));
