const removeNthFromEnd = function(head, n) {
    let current = head
    let arr = []
    while(current !== null) {
        arr.push(current.val);
        current = current.next
    }
    arr.reverse();
    arr.splice(n-1, 1);
    arr.reverse()
    let newHead = null;
    let newCurrent = null
    for(const ele of arr) {
        console.log(newHead, newCurrent, 'HELP')
        if(newHead === null) {
            console.log('Setting head')
            newHead = new ListNode(ele);
            newCurrent = newHead;
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
