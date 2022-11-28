function medianOfTwoSortedArray(a1, a2) {
  const merge = [...a1, ...a2]
  console.log(merge)
  merge.sort((a, b) => a - b)
  console.log(merge[Math.floor(merge.length / 2) - 1], merge[Math.floor(merge.length / 2)])
  const mid = merge.length % 2 === 0 ? (merge[Math.floor(merge.length / 2) - 1] + merge[Math.floor(merge.length / 2)]) / 2 : merge[Math.floor(merge.length / 2)]
  return mid
}

// console.log(medianOfTwoSortedArray([1,3], [2]))
console.log(medianOfTwoSortedArray([1,2], [3,4]))
