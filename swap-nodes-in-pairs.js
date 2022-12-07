const swapPairs = function(head) {
    let current = head;
    const arr = [];
    while(current !== null) {
      arr.push(current.val);
      current = current.next
    }
    
    let lp = 0;
    while(arr[lp + 1]) {
        let rp = lp + 1;
        let temp = arr[lp]
        arr[lp] = arr[rp];
        arr[rp] = temp
        lp += 2;
    }

    let newHead = null;
    let newCurrent = null;

    for(const ele of arr) {
      if(newHead === null) {
        newHead = new ListNode(ele);
        newCurrent = newHead
      } else {
        newCurrent.next = new ListNode(ele)
        newCurrent = newCurrent.next
      }
    }
    return newHead
};

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
