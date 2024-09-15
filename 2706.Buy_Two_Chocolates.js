/**
 * 2706. Buy Two Chocolates
 * Easy
 * Topics
 * Companies
 * Hint
 *
 * You are given an integer array prices representing the prices of various chocolates in a store.
 * You are also given a single integer money, which represents your initial amount of money.
 *
 * You must buy exactly two chocolates in such a way that you still have some non-negative leftover money.
 * You would like to minimize the sum of the prices of the two chocolates you buy.
 *
 * Return the amount of money you will have leftover after buying the two chocolates.
 * If there is no way for you to buy two chocolates without ending up in debt, return money.
 * Note that the leftover must be non-negative.
 *
 *
 *
 * Example 1:
 *
 * 	Input: prices = [1,2,2], money = 3
 * 	Output: 0
 * 	Explanation: Purchase the chocolates priced at 1 and 2 units respectively.
 * 	You will have 3 - 3 = 0 units of money afterwards.
 * 	Thus, we return 0.
 *
 * Example 2:
 *
 * 	Input: prices = [3,2,3], money = 3
 * 	Output: 3
 * 	Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.
 *
 *
 *
 * Constraints:
 *
 * 	2 <= prices.length <= 50
 * 	1 <= prices[i] <= 100
 * 	1 <= money <= 100
 */

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
	let lowest;
	let second_lowest;

	if (prices[0] < prices[1]) {
		lowest = prices[0];
		second_lowest = prices[1];
	}
	else {
		lowest = prices[1];
		second_lowest = prices[0];
	}

	if (prices.length == 2) {
		if (lowest + second_lowest <= money)
			return money - lowest - second_lowest;
		else
			return money;
	}

	for (let i = 2; i < prices.length; i++)
		if (prices[i] < lowest) {
			second_lowest = lowest;
			lowest = prices[i];
		}
		else if (prices[i] < second_lowest)
			second_lowest = prices[i];

	if (lowest + second_lowest <= money)
		return money - lowest - second_lowest;

	return money;
};

let p = [1, 2, 2];
let m = 3;
console.log("p = [" + p + ']');
console.log("m = " + m);
console.log("result = " + buyChoco(p, m) + '\n');

p = [3, 2, 3];
m = 3;
console.log("p = [" + p + ']');
console.log("m = " + m);
console.log("result = " + buyChoco(p, m) + '\n');
