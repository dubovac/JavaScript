/**
 * 2236. Root Equals Sum of Children
 * Easy
 * Topics
 * Companies
 *
 * You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
 *
 * Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *		       10
 * 		      /  \
 *	       /    \
 *	      /      \
 *	     4        6
 *
 * 	Input: root = [10,4,6]
 * 	Output: true
 * 	Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
 * 	10 is equal to 4 + 6, so we return true.
 *
 * Example 2:
 *
 *		       5
 * 		      / \
 *	       /   \
 *	      /     \
 *	     3       1
 *
 * 	Input: root = [5,3,1]
 * 	Output: false
 * 	Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
 * 	5 is not equal to 3 + 1, so we return false.
 *
 *
 *
 * Constraints:
 *
 * 	The tree consists only of the root, its left child, and its right child.
 * 	-100 <= Node.val <= 100
 */
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

var checkTree = function(root) {
	if (root.val == root.left.val + root.right.val)
		return true;

	return false;
};

let rt = new TreeNode(10, new TreeNode(6), new TreeNode(4));
console.log(checkTree(rt));

rt = new TreeNode(5, new TreeNode(5), new TreeNode(1));
console.log(checkTree(rt));
