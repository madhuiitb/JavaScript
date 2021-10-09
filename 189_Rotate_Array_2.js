/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Taking about this solution it uses an extra space i.e one temp array i.e length of the array i.e N
 * So space complexity is O(n).
 * Runtime: 112 ms, faster than 71.29% of JavaScript online submissions for Rotate Array.
 * Memory Usage: 47.9 MB, less than 61.09% of JavaScript online submissions for Rotate Array.
 */
var rotate = function(nums, k) {
    
    let n = nums.length; // Let say n=5 , k=2
    let steps = k%n; // this gives final remainder for the elements to shift it uses when the length of the array is less than the given k.
   // console.log(steps);
    let left=0, right=steps; // Let say right = 2 
    let temp=[];
    for(;left<n;left++,right++){ // already left and right has been defined above using them 
        if(right>=n){  // right = 2,3,4, when right>=5 and n=5 it will execute.
            right = right - n; // Now right becomes 5-5 = 0
           // console.log("right-"+right);
        }
        temp[right]=nums[left]; // Till if condition temp values are like 2,3,4 for 5 if will execute
       // console.log("temp="+temp[0]);
    }
    for(let i=0;i<n;i++){
        nums[i] = temp[i]; // finally values are asigned back to original array.
    }
    
};
