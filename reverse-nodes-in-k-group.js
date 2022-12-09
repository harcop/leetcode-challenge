function reverseKGroup(head, k) {
  const arr = [];
  let current = head;
  while(current !== null) {
    arr.push(current.val);
    current = current.next
  }
  let fPointer = 0;
  while(arr[fPointer + k - 1]) {
    let sPointer = fPointer + k - 1;
    let lp = fPointer
    let rp = sPointer
    while(lp < rp) {
      let temp = arr[lp];
      arr[lp] = arr[rp];
      arr[rp] = temp;
      lp += 1
      rp -= 1
    }
    fPointer += k;
  }

  let newHead = null;
  let newCurrent = null;
  for(const ele of arr) {
    if(!newHead) {
      newHead = new ListNode(ele)
      newCurrent = newHead;
    } else {
      newCurrent.next = new ListNode(ele)
      newCurrent = newCurrent.next
    }
  }

  return newHead
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
