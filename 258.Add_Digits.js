/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	if (num > 9)
		while (num > 9) {
			let sum = 0;
			while (num != 0) {
				sum += num % 10;
				num = Math.floor(num / 10);
			}
			num = sum;
		}
	return num;
};

let x = 2147483647;
console.log(addDigits(x));
