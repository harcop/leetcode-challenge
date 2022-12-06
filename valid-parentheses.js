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
      arr.pop()
    } else {
      arr.push(paren)
    }
  }
  return arr.length ? false : true
}

console.log(validParentheses('()[]{}'))
console.log(validParentheses('(]'))
