const zigzagConvert = function(str, numRows) {
    const zz = [];
    let idx = 1;
    let adder = 1;
    if(numRows === 1) {
        return str;
    }
    for(const ele of str) {
        if(!zz[idx]) {
            zz[idx] = ''
        }
        zz[idx] += ele
        if(idx === numRows) {
            adder = -1
        } else if(idx === 1) {
            adder = 1
        }
        idx += adder
    }
    return zz.join('')
};
