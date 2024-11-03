/**
 * 412. Fizz Buzz
 * Easy
 * Topics
 * Companies
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 *	answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 *	answer[i] == "Fizz" if i is divisible by 3.
 *	answer[i] == "Buzz" if i is divisible by 5.
 *	answer[i] == i (as a string) if none of the above conditions are true.
 *
 *
 *
 * Example 1:
 *
 *	Input: n = 3
 *	Output: ["1","2","Fizz"]
 *
 * Example 2:
 *
 *	Input: n = 5
 *	Output: ["1","2","Fizz","4","Buzz"]
 *
 * Example 3:
 *
 *	Input: n = 15
 *	Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 *
 *
 *
 * Constraints:
 *
 *	1 <= n <= 10^4
 */

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n) {
	let result = [];

	for (let x = 1; x <= n; x++) {
		if (x % 3 == 0 && x % 5 == 0)
			result.push("FizzBuzz");
		else if (x % 3 == 0)
			result.push("Fizz");
		else if (x % 5 == 0)
			result.push("Buzz");
		else
			result.push(x.toString());
	}

	return result;
};

let n = 35;

console.log(fizzBuzz(n));
