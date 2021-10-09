/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Taking time O(n*n) and it has passed the 37 test cases out of 38 and the last one was time limit exceeded.
 * Will try to optimize this one to some other approach
 */
var rotate = function(nums, k) {
    
    let n = nums.length;
    for(var i=0;i<k;i++){
        var temp = nums[n-1];
        for(var j=n-1;j>0;j--){
            nums[j]=nums[j-1];
        }
        nums[0]=temp;
    }
};
