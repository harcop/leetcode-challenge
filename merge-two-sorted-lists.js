function mergeTwoSortedLists(list1, list2) {
  const arr = []
  let p1 = list1;
  let p2 = list2
  while(p1 !== null && p2 !== null) {
    if(p1.val < p2.val) {
      arr.push(p1.val)
      p1 = p1.next
    } else if(p1.val === p2.val) {
      arr.push(p1.val)
      arr.push(p2.val)
      p1 = p1.next
      p2 = p2.next
    } else {
      arr.push(p2.val)
      p2 = p2.next
    }
  }
  if(p1) {
    while(p1 !== null) {
      arr.push(p1.val)
      p1 = p1.next
    }
  }
  if(p2) {
    while(p2 !== null) {
      arr.push(p2.val)
      p2 = p2.next
    }
  }
  let newHead = null
  let current = null
  for(const ele of arr) {
    if(newHead === null) {
      newHead = new ListNode(ele)
      current = newHead
    } else {
      current.next = new ListNode(ele);
      current = current.next
    }
  }
  return newHead
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
