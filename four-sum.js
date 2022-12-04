function fourSum(arr, target) {
  arr.sort((a, b) => a-b)
  const output = {};
  for(let i=0; i < arr.length - 3; i++) {
    for(let j = i + 1; j < arr.length - 2; j++) {
      let lp = j+1;
      let rp = arr.length - 1
      while(lp < rp) {
        let sum = arr[i] + arr[j] + arr[lp] + arr[rp];
        if(sum === target) {
          output[[arr[i], arr[j],  arr[lp], arr[rp]]] = true
          lp += 1
          rp -= 1;
        }
        else if(sum > target) {
          rp -= 1;
        } else {
          lp += 1;
        }
      }
    }
  }
  return Object.keys(output).map(ele => ele.split(',').map(ele => Number(ele)))
}

console.log(fourSum([1,0,-1,0,-2,2], 0))
console.log(fourSum([2,2,2,2,2], 8))
