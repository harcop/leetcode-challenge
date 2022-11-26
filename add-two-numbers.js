const addTwoNumbers = function(l1, l2) {
    const arr1 = [];
    const arr2 = [];
    let current = l1
    while(current !== null) {
        arr1.push(current.val)
        current = current.next
    }
    let current2 = l2
    while(current2 !== null) {
        arr2.push(current2.val)
        current2 = current2.next
    }
    
    const sum = BigInt(BigInt(arr1.reverse().join('')) + BigInt(arr2.reverse().join('')));
  
    const sumRev = sum.toString().split('').reverse();
    let head = null;
    let finalCurrent = null
    for(const ele of sumRev) {
        if(head === null) {
            head = new ListNode(ele)
            finalCurrent = head
            continue
        }
        finalCurrent.next = new ListNode(ele)
        finalCurrent = finalCurrent.next
    }
    return head;
};

function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}
