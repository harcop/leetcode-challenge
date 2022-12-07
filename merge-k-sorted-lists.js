const mergeKLists = function(lists) {
    const mapList = {}
    for(const list of lists) {
        let current = list;
        while(current !== null) {
            const val = current.val
            if(!mapList[val]) {
                mapList[val] = []
            }
            mapList[val] = [...mapList[val], val]
            current = current.next
        }
    }
    const arr = [];
    for(const ele of Object.keys(mapList).sort((a,b) => a-b)) {
        arr.push(...mapList[ele])
    }

    let newHead = null;
    let current = null;
    for(const ele of arr) {
        if(!newHead) {
            newHead = new ListNode(ele);
            current = newHead
        } else {
            current.next = new ListNode(ele);
            current = current.next;
        }
    }

    return newHead
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
