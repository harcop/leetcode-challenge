const reverse = function(x) {
    let xs = x.toString();
    let pre = 1
    if(xs.startsWith('-')) {
        pre = -1;
        xs = xs.substring(1)
    }
    const output = pre * Number(xs.split('').reverse().join(''))
    if(output <= -(2**31) || output >= (2**31 - 1)) {
        return 0
    }
    return output;
};
