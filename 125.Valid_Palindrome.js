/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 	if (s.length <= 1)
	return true;

	let ss = "";
	let l = s.length;

	for (let i = 0; i < l; i++)
		if ((/[a-zA-Z0-9]/).test(s[i]))
			ss += s[i].toLowerCase();

	let ll = ss.length;
	let result = true;

	for (let i = 0; i <= ll - 1 - i; i++)
		if (ss[i] != ss[ll - 1 - i])
			result = false;

	return result;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));

s = " ";
console.log(isPalindrome(s));

s = "p0";
console.log(isPalindrome(s));
