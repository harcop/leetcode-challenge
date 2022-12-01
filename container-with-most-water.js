function containerWithMostWaterP(arr) {
  let lp = 0;
  let rp = arr.length - 1;
  let maxWater = 0
  while(lp <= rp) {
    const l1 = arr[lp];
    const l2 = arr[rp];
    const distance = rp - lp;
    const max = l1 < l2 ? l1: l2
    maxWater = Math.max(max * distance, maxWater)
    if(l1 < l2) {
      lp += 1
    } else {
      rp -= 1
    }
  }
  return maxWater
}
console.log(containerWithMostWaterP([1,7,6,2,5,9,8,9,7]))
console.log(containerWithMostWaterP([1,1]))
