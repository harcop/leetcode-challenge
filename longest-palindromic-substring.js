function longestPalindromicSubstring(str) {
  let max = str[0];
  for(let i = 0; i < str.length - 1; i++) {
    for(let j = i + 1; j < str.length; j++) {
      const substr = str.substring(i, j + 1)
      if(isPalindrome(substr)) {
        max = substr.length > max.length ? substr : max
      }
    }
  }
  return max
}

function isPalindrome(str) {
  let lp = 0;
  let rp = str.length -1 ;
  while (lp <= rp) {
    const lChar = str[lp]
    const rChar = str[rp]
    if(lChar !== rChar) {
      return false
    }
    lp += 1;
    rp -= 1;
  }
  return true
}

// console.log(isPalindrome('8008'))
// console.log(isPalindrome('8038'))
// console.log(isPalindrome('8408'))
// console.log(isPalindrome('babad'))
console.log(longestPalindromicSubstring('8008'))
console.log(longestPalindromicSubstring('babad'))
console.log(longestPalindromicSubstring('cbbd'))
console.log(longestPalindromicSubstring('efr'))
