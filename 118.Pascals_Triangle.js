/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	let array = [];
	array.push([1]);

	if (numRows == 0) {
		array.pop();
		return array;
	}

	if (numRows == 1)
		return array;

	let a = [1, 1];

	for (let i = 2; i < numRows + 1; i++) {
		let b = [];
		for (let j = 1; j < i + 1; j++)
			if (j == 1 || j == i)
				b.push(1);
		else
			b.push(a[j - 2] + a[j - 1]);

		a = b;

		array.push(b);
	}

	return array;
};

console.log(generate(0));
console.log(generate(1));
console.log(generate(30));
