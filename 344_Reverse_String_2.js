/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Runtime: 108 ms, faster than 66.01% of JavaScript online submissions for Reverse String.
 * Memory Usage: 46.2 MB, less than 34.48% of JavaScript online submissions for Reverse String.
 * Two pointer approach.
 * Array will be traversed from both the sides so that it will take at most O(n) time.
 * Because we are using every element.
 */
var reverseString = function(s) {
    
    var len = s.length;
    var left = 0, right = len-1;
    
    while(left<right){
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};
