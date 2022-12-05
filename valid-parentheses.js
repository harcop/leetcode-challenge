function validParentheses(parens) {
  const match = {
    ")": '(',
    "}": '{',
    "]": '['
  }
  const arr = []
  for(let paren of parens) {
    if(match[paren]) {
      if(arr[arr.length - 1] !== match[paren]) {
        return false
      }
      arr.splice(arr.length - 1, 1)
    } else {
      arr.push(paren)
    }
  }
  console.log(arr)
  return arr.length ? false : true
}

console.log(validParentheses('()[]{}'))
console.log(validParentheses('(]'))
