//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  let currNode1 = l1;
  let currNode2 = l2;
  let carryOver = false;
  let resultCurrNode = new ListNode();
  let result = resultCurrNode;

  while (currNode1 || currNode2) {
    // iterate both, carry over next value
    let addedValue = carryOver ? 1 : 0;
    if (currNode1 !== null) {
      addedValue += currNode1.val;
      currNode1 = currNode1.next;
    }
    if (currNode2 !== null) {
      addedValue += currNode2.val;
      currNode2 = currNode2.next;
    }

    if (addedValue > 9) {
      addedValue -= 10;
      carryOver = true;
    } else {
      carryOver = false;
    }
    resultCurrNode.next = new ListNode();
    resultCurrNode = resultCurrNode.next;
    resultCurrNode.val = addedValue;
  }

  if (carryOver) {
    resultCurrNode.next = new ListNode();
    resultCurrNode = resultCurrNode.next;
    resultCurrNode.val = 1;
  }
  result = result.next;
  return result;
};