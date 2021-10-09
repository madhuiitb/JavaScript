/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 100 ms, faster than 53.00% of JavaScript online submissions for Move Zeroes.
 * Memory Usage: 43.5 MB, less than 18.41% of JavaScript online submissions for Move Zeroes.
 * 
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    let new_index=0;
    for(let i=0;i<n;i++){
        if(nums[i]!==0){
            nums[new_index]=nums[i];
            if(new_index!==i){
                nums[i]=0;
               // console.log(new_index);
            }      
            new_index = new_index+1;
        }
    } 
};
