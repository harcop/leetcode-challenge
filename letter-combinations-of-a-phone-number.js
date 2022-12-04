const letterCombinations = function(digits) {
    const numMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    if(!digits.length) {
        return []
    }
    let current = [];
    let temp = [];
    for(const ele of numMap[digits[0]]) {
        current.push(ele)
    }
    for(let i = 1; i < digits.length; i++) {
        let ele = numMap[digits[i]];
        for(const letter of ele) {
            for (const val of current) {
                temp.push(`${val}${letter}`)
            }
        }
        current = temp;
        temp = []
    }
    return current;
};
console.log(letterCombinations("29"))
console.log(letterCombinations(""))
