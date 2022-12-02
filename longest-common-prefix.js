const longestCommonPrefix = function(arr) {
    const fEle = arr[0];
    let output = arr[0];
    let i = 1;
    let p = 0;
    let temp = ""
    while(arr[i] || arr[i] === "") {
        if(fEle[p] && arr[i][p] && fEle[p] === arr[i][p]) {
            temp += fEle[p];
            p += 1;
        } else {
            output = temp.length < output.length ? temp : output;
            temp = ""
            i += 1;
            p = 0;
        }
    }
    return output
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["caldog","carcar","car"]))
