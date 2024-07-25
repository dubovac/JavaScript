/**
 * 735. Asteroid Collision
 * Medium
 * Topics
 * Companies
 * Hint
 *
 * We are given an array asteroids of integers representing asteroids in a row.
 *
 * For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
 * Each asteroid moves at the same speed.
 *
 * Find out the state of the asteroids after all collisions.
 * If two asteroids meet, the smaller one will explode.
 * If both are the same size, both will explode.
 * Two asteroids moving in the same direction will never meet.
 *
 *
 *
 * Example 1:
 *
 * 	Input: asteroids = [5,10,-5]
 * 	Output: [5,10]
 * 	Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
 *
 * Example 2:
 *
 * 	Input: asteroids = [8,-8]
 * 	Output: []
 * 	Explanation: The 8 and -8 collide exploding each other.
 *
 * Example 3:
 *
 * 	Input: asteroids = [10,2,-5]
 * 	Output: [10]
 * 	Explanation: The 2 and -5 collide resulting in -5.
 * 	The 10 and -5 collide resulting in 10.
 *
 *
 * Constraints:
 *
 * 	2 <= asteroids.length <= 104
 * 	-1000 <= asteroids[i] <= 1000
 * 	asteroids[i] != 0
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
	let count = 0;

	for (let i = 0; i < asteroids.length; i++) {
		if (i > 0 && asteroids[i] < 0) {
			let j = 1;
			while (i - j >= 0) {
				if (asteroids[i - j] < 0)
					break;

				if (asteroids[i - j] > 0) {
					if (asteroids[i - j] + asteroids[i] > 0) {
						asteroids[i] = 0;
						count++;
						break;
					}
					else if (asteroids[i - j] + asteroids[i] < 0) {
						asteroids[i - j] = 0;
						count++;
					}
					else {
						asteroids[i - j] = 0;
						asteroids[i] = 0;
						count += 2;
						break;
					}
				}
				j++;
			}
		}
	}

	let result = [];

	for (let i = 0; i < asteroids.length; i++)
		if (asteroids[i] != 0)
			result.push(asteroids[i]);

	return result;
};

let a = [10, 7, 5, 3, -2, -3, 5, -5, -1];

let r = asteroidCollision(a);

console.log(r);
