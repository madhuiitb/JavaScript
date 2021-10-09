/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 108 ms, faster than 83.09% of JavaScript online submissions for Rotate Array.
 * Memory Usage: 49.1 MB, less than 35.19% of JavaScript online submissions for Rotate Array.
 * Direct Javascript Methods used here
 * unshift method inserts the elements in which order the given elements
 * splice method to truncate the array at a given point.
 */
var rotate = function(nums, k) {
    
//     let n = nums.length;
    
//     // Direct javascript methods are there
//     // Unshift method and splice methods.
//     k=k%n;

//     nums.unshift(...nums.splice(n-k));
//   //  console.log(nums);
  
  
  let n = nums.length;
    
    // Direct javascript methods are there
    // Unshift method and splice methods.
    k=k%n;
   // console.log(nums.splice(n-k));
   // console.log(...nums.splice(n-k));
    let slice = nums.splice(n-k);
   // console.log(slice);
    nums.unshift(...slice);
    
  //  console.log(nums);
    
    
};
