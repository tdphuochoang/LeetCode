/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let values = [];
  while (head.next) {
    const value = head.val;
    values.push(value);
    head = head.next;
  }
  const value = head.val;
  values.push(value);
  values.splice(values.length - n, 1);

  console.log(values);

  let node = null;
  values.reverse().forEach((item) => {
    if (node === null) {
      node = new ListNode(item);
    } else {
      let newNode = new ListNode(item);
      newNode.next = node;
      node = newNode;
    }
  });
  return node;
};
