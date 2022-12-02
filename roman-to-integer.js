function romanToInteger(roman) {
    const romanMap = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1
  }
  let output = 0;
  for(let i = 0; i < roman.length; i++) {
    let f = roman[i]
    let b = roman[i+1]
    if(romanMap[f] < romanMap[b]) {
      output += romanMap[`${f}${b}`]
      i += 1;
    } else {
      output += romanMap[f]
    }
  }
  return output
}

console.log(romanToInteger('III'))
console.log(romanToInteger('LVIII'))
console.log(romanToInteger('MCMXCIV'))
