const threeSumClosest = function(arr, target) {
    arr.sort((a, b) => a-b)
    let output = arr[0] + arr[1] + arr[2];
    for(let i = 0; i < arr.length - 2; i++) {
        let fPointer = i + 1;
        let sPointer = i + 2;
        while(fPointer < arr.length -1) {
            let sum = arr[i] + arr[fPointer] + arr[sPointer]
            if(Math.abs(sum - target) < Math.abs(output - target)) {
                output = sum
            }
            if(sPointer === arr.length -1) {
                fPointer += 1;
                sPointer = fPointer + 1
            } else {
                sPointer += 1
            }
        }
    }
    return output
};

console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([0,0,0], 1))
console.log(threeSumClosest([2, 0, 12, 0], 8))
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))
