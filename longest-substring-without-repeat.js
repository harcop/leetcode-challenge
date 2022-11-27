function LongestSubstringWithoutRepeat(str) {
  let subStr = '';
  let max = 0;
  str.split('').forEach(ele => {
    if(subStr.includes(ele)) {
      max = Math.max(max, subStr.length)
      subStr = subStr.substring(subStr.indexOf(ele) + 1)
    }
    subStr += ele
  });
  max = Math.max(max, subStr.length)
  return max
}

console.log(LongestSubstringWithoutRepeat('abcabcbb'))
console.log(LongestSubstringWithoutRepeat('bbb'))
console.log(LongestSubstringWithoutRepeat('pwwkew'))
console.log(LongestSubstringWithoutRepeat(' '))
console.log(LongestSubstringWithoutRepeat('dvdf'))
