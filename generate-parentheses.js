function generateParenthese(num) {
  const comb = ['((', '()', '))', ')(']
  let output = ['']
  let temp = []
  let i = num;
  while(i > 0) {
    for(const ele of output) {
      for(const com of comb) {
        temp.push(`${ele}${com}`)
      }
    }
    output = temp
    temp = []
    i -= 1;
  }
  return output.map(ele => validParentheses(ele) ? ele : '').filter(Boolean)
}

function validParentheses(parens) {
  const match = {
    ")": '(',
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

console.log(generateParenthese(3))
console.log(generateParenthese(1))
console.log(generateParenthese(2))
