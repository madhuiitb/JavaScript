/**
 * @param {number[]} nums
 * @return {number[]}
 * The sortest way for the programming.
 */
var sortedSquares = function(nums) {
    
     const output = nums.map(x=>x*x).sort((a,b)=>a-b);
    return output;
};
