function haystackNeedle(haystack, needle) {
  let lp = 0;
  let rp = needle.length;
  let output = -1;

  while(haystack[lp]) {
    let subs = haystack.slice(lp, rp)
    console.log(subs)
    if(subs === needle) {
      output = lp;
      return lp;
    }
    lp += 1;
    rp += 1;
    console.log(lp)
  }
  return output
}

console.log(haystackNeedle('sadbutsad', 'sad'))
console.log(haystackNeedle('"leetcode"', 'leeto'))
