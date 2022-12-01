function integerToRoman(int) {
  const romanMap = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }
  let roman = '';
  let rem = int;
  while(rem > 0) {
    if(rem >= 1000) {
      roman += romanMap[1000];
      rem -= 1000
    } else if(rem >= 900) {
      roman += romanMap[900]
      rem -= 900
    }
    else if(rem >= 500) {
      roman += romanMap[500]
      rem -= 500
    }
    else if(rem >= 400) {
      roman += romanMap[400]
      rem -= 400
    }
    else if(rem >= 100) {
      roman += romanMap[100]
      rem -= 100
    }
    else if(rem >= 90) {
      roman += romanMap[90]
      rem -= 90
    }
    else if(rem >= 50) {
      roman += romanMap[50]
      rem -= 50
    }
    else if(rem >= 40) {
      roman += romanMap[40]
      rem -= 40
    }
    else if(rem >= 10) {
      roman += romanMap[10]
      rem -= 10
    }
    else if(rem >= 9) {
      roman += romanMap[9]
      rem -= 9
    }
    else if(rem >= 5) {
      roman += romanMap[5]
      rem -= 5
    }
    else if(rem >= 4) {
      roman += romanMap[4]
      rem -= 4
    }
    else if(rem >= 1) {
      roman += romanMap[1]
      rem -= 1
    }
  }
  return roman
}

console.log(integerToRoman(49))
console.log(integerToRoman(22))
console.log(integerToRoman(88))
console.log(integerToRoman(390))
