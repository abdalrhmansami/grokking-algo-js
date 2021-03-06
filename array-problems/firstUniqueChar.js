const firstUniqChar = (s) => {
  let hash = {};
  for (let i = 0; i < s.length; ++i) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }
  for (let i = 0; i < s.length; ++i) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log("leetcode");
