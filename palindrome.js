const isPalindrome = function(x) {
    const xs = x.toString()
    let lp = 0;
    let rp = xs.length - 1;
    while(lp <= rp) {
        const lChar = xs[lp];
        const rChar = xs[rp];
        if(lChar !== rChar) {
            return false
        }
        lp += 1;
        rp -= 1;
    }
    return true;
};
