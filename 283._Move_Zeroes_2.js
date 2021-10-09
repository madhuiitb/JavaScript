/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * By using splice method and push method
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    for(let i=0;i<n;i++){
      if(nums[i]==0){
          nums.splice(i,1); // this splice method removes the 1 element at index i, i.e it automatically adjust the all the elements one position ahead.
          nums.push(0); // this will push the 0 to the end of the array
          i--;
          n--;
      }
    } 
};
