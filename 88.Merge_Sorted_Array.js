/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	let temp = [];

	let j = 0;
	let k = 0;

	if (n > 0) {
		for (let i = 0; i < nums1.length; i++) {
			if (m > 0 && n > 0) {
				if (nums1[j] <= nums2[k]) {
					temp.push(nums1[j++]);
					m--;
				}
				else {
					temp.push(nums2[k++]);
					n--;
				}
			}
			else if (m == 0 && n > 0) {
				temp.push(nums2[k++]);
				n--;
			}
			else if (m > 0 && n == 0) {
				temp.push(nums1[j++]);
				m--;
			}
		}
		while (nums1.length > 0)
			nums1.pop();

		for (let i = 0; i < temp.length; i++)
			nums1.push(temp[i]);
	}
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1)

nums1 = [1];
nums2 = [];
m = 1;
n = 0;
merge(nums1, m, nums2, n);
console.log(nums1)

nums1 = [0];
nums2 = [1];
m = 0;
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1)

nums1 = [2, 0];
nums2 = [1];
m = 1;
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1)

nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
nums2 = [1, 2, 2];
m = 6;
n = 3;
merge(nums1, m, nums2, n);
console.log(nums1)

nums1 = [4, 0, 0, 0, 0, 0];
nums2 = [1, 2, 3, 5, 6];
m = 1;
n = 5;
merge(nums1, m, nums2, n);
console.log(nums1)

nums1 = [-1, 3, 0, 0, 0, 0, 0];
nums2 = [0, 0, 1, 2, 3];
m = 2;
n = 5;
merge(nums1, m, nums2, n);
console.log(nums1)
