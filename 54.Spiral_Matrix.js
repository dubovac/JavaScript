/**
 * 54. Spiral Matrix
 * Medium
 * Topics
 * Companies
 * Hint
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 *
 * Example 1:
 *
 *	1 → 2 → 3
 *		↓
 *	4 → 5   6
 *	↑	↓
 *	7 ← 8 ← 9
 *
 *	Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 *	Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 *
 *	1 →  2 →  3 →  4
 *		       ↓
 *	5 →  6 →  7    8
 *	↑	       ↓
 *	9 ← 10 ← 11 ← 12
 *
 *	Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 *	Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 * Constraints:
 *
 *	m == matrix.length
 *	n == matrix[i].length
 *	1 <= m, n <= 10
 *	-100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
	let left = 0;
	let right = matrix[0].length;
	let up = 0;
	let bottom = matrix.length;

	let k = 0;
	result = [];
	let rl = right * bottom				// rl - result length

	while(1) {
		for (let j = left; j < right; j++) {
			result.push(matrix[up][j]);
			k++;
			if (k == rl)
				break;
		}

		if (k == rl)
			break;

		for (let i = up + 1; i < bottom; i++) {
			result.push(matrix[i][right - 1]);
			k++;
			if (k == rl)
				break;
		}

		if (k == rl)
			break;

		for (let j = right - 2; j >= left; j--) {
			result.push(matrix[bottom - 1][j]);
			k++;
			if (k == rl)
				break;
		}

		if (k == rl)
			break;

		for (let i = bottom - 2; i > up; i--) {
			result.push(matrix[i][left]);
			k++;
			if (k == rl)
				break;
		}

		if (k == rl)
			break;

		left++;
		right--;
		up++;
		bottom--;
	}

	return result;
};

let m = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
];
console.log(m);
console.log(spiralOrder(m));
console.log();

m = [[1]];
console.log(m);
console.log(spiralOrder(m));
console.log();

m = [
	[ 1,  2,  3,  4,  5,  6,  7,  8],
	[ 9, 10, 11, 12, 13, 14, 15, 16],
	[17, 18, 19, 20, 21, 22, 23, 24],
	[25, 26, 27, 28, 29, 30, 31, 32],
	[33, 34, 35, 36, 37, 38, 39, 40]
];
console.log(m);
console.log(spiralOrder(m));
console.log();
