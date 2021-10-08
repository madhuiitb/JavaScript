/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * It is same like the problem #704_Binary Search
 * vice versa i.e if you understand the problem of this then you can do the problem of 704. Binary Search
 */
var searchInsert = function(nums, target) {
    
    let len = nums.length;
    
    let left =0, right = len;
    
    while(left<=right){
        var mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            return mid;
        }
        else if( nums[mid] < target){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return left;
    
};
