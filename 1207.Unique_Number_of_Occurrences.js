/**
 * 1207. Unique Number of Occurrences
 * Easy
 * Topics
 * Companies
 * Hint
 *
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *	Input: arr = [1,2,2,1,1,3]
 *	Output: true
 *	Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1.
 *	No two values have the same number of occurrences.
 *
 * Example 2:
 *
 *	Input: arr = [1,2]
 *	Output: false
 *
 * Example 3:
 *
 *	Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 *	Output: true
 *
 *
 *
 * Constraints:
 *
 *	1 <= arr.length <= 1000
 *	-1000 <= arr[i] <= 1000
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	let max = -1001;
	let min = 1001;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min)
			min = arr[i];
		if (arr[i] > max)
			max = arr[i];
	}

	let size = max - min + 1;
	let temp = [];

	for (let i = 0; i < size; i++)
		temp.push(0);


	for (let i = 0; i < arr.length; i++)
		temp[arr[i] - min]++;

	for (let i = 0; i < size - 1; i++)
		for (let j = i + 1; j < size; j++)
			if (temp[i] != 0 && temp[j] != 0 && temp[i] == temp[j])
				return false;
	return true;
};

let a = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(a))

a = [1, 2];
console.log(uniqueOccurrences(a))

a = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(a));

a = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
console.log(uniqueOccurrences(a));
