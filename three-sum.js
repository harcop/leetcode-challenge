function threeSum(arr) {
  arr.sort((a, b) => a-b)
  const output = {};
  for(let i=0; i < arr.length - 2; i++) {
    let lp = i+1;
    let rp = arr.length - 1
    while(lp < rp) {
      let sum = arr[i] + arr[lp] + arr[rp];
      if(sum === 0) {
        output[[arr[i], arr[lp], arr[rp]]] = true
        rp -= 1;
        lp += 1
      }
      else if(sum > 0) {
        rp -= 1;
      } else {
        lp += 1;
      }
    }
  }
  return Object.keys(output).map(ele => ele.split(',').map(ele => Number(ele)))
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))
console.log(threeSum([0,0,0,0]))
console.log(threeSum([1,2,-2,-1]))
console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]))
