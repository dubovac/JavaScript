/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

function printList(head) {
	let a = [];

	while (head != null) {
		a.push(head.val);
		head = head.next;
	}
	
	console.log(a);
}

var removeElements = function(head, val) {
	if (head == null)
		return null;

	let r = head;

	while (head != null) {
		while (head.next != null && head.next.val == val)
			head.next = head.next.next;

		head = head.next;
	}

	if (r.val == val) {
		if (r.next == null)
			return null;
		else
			return r.next;
	}

	return r;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);


printList(head);

head = removeElements(head, 6);

printList(head);

//-------------------------------------------------------

head = null;


printList(head);

head = removeElements(head, 1);

printList(head);

//-------------------------------------------------------

head = new ListNode(7);
head.next = new ListNode(7);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(7);

printList(head);

head = removeElements(head, 7);

printList(head);
