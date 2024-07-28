/*
 * 205. Isomorphic Strings
 * Easy
 * Topics
 * Companies
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 *
 *
 *
 * Example 1:
 *
 * 	Input: s = "egg", t = "add"
 * 	Output: true
 *
 * Example 2:
 *
 * 	Input: s = "foo", t = "bar"
 * 	Output: false
 *
 * Example 3:
 *
 * 	Input: s = "paper", t = "title"
 * 	Output: true
 *
 *
 *
 * Constraints:
 *
 * 	1 <= s.length <= 5 * 104
 * 	t.length == s.length
 * 	s and t consist of any valid ascii character.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	let s_array = [];
	let t_array = [];

	for (let i = 0; i < s.length; i++) {
		s_array.push(0);
		t_array.push(0);
	}

	let s_counter = 0;
	let t_counter = 0;

	let return_bool = true;

	for (let i = 1; i < s.length; i++) {
		let s_check = true;
		let t_check = true;

		for (let j = 0; j < i; j++)
			if (s[i] == s[j]) {
				s_array[i] = s_array[j];
				s_check = false;
				break;
			}

		for (let j = 0; j < i; j++)
			if (t[i] == t[j]) {
				t_array[i] = t_array[j];
				t_check = false;
				break;
			}

		if (s_check)
			s_array[i] = ++s_counter;

		if (t_check)
			t_array[i] = ++t_counter;

		if (s_array[i] != t_array[i]) {
			return_bool = false;
			break;
		}
	}

	return return_bool;
};

let s0 = "egg";
let t0 = "add";

if(isIsomorphic(s0, t0))
	console.log("True");
else
	console.log("False");

let s1 = "foo";
let t1 = "bar";

if(isIsomorphic(s1, t1))
	console.log("True");
else
	console.log("False");

let s2 = "paper";
let t2 = "title";

if(isIsomorphic(s2, t2))
	console.log("True");
else
	console.log("False");
