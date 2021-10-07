/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Given an array of integers nums which is sorted in ascending order, 
 * and an integer target, write a function to search target in nums. 
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 */
 
var search = function(nums, target) {
    
    var len = nums.length;
    
    let left=0;
    let right = len;
    while(left <= right){
        var mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[mid] < target){
            left=mid+1;
        }
        else{
           right=mid-1;
        }
    }
    return -1;
};
