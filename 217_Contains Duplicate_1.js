/**
 * @param {number[]} nums
 * @return {boolean}
 * it is an improvement solution for contains duplicates.
 * The #Set object lets you store #unique values of any type
 * NaN and undefined can also be stored in a Set
 */
var containsDuplicate = function(nums) {
    
    let no_of_elements = nums.length;
    
    for(var i=0;i<no_of_elements;i++){
        for(var j=i+1; j<no_of_elements;j++){
            if(nums[i]==nums[j]){
                return true;
            }
        }
    }
    return false;
    
};
