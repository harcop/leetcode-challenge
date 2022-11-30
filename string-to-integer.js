const myAtoi = function(str) {
    let pre = 0
    let num = ''
    for(const ele of str) {
        if(ele === ' '){
            if(num || pre !== 0) {
                break
            } else {
                continue
            }
        } else if(pre === 0 && ele === '+') {
            pre = 1
        } else if(pre === 0 && ele === '-') {
            pre = -1
        } else if(/\d/.test(ele)) {
            pre = pre === 0 ? 1 : pre
            num += ele
        } else {
            break
        } 
    }
    
    const output = pre * Number(num)
    if(output >= (2**31 - 1)) {
        return (2**31 - 1)
    } else if(output <= -(2**31)) {
        return -(2**31)
    }
    return output
};
