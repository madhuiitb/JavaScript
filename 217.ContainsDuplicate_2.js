/**
 * @param {number[]} nums
 * @return {boolean}
 * it is an improvement solution for contains duplicates.
 * The #Set object lets you store #unique values of any type
 * NaN and undefined can also be stored in a Set
 *
 */
var containsDuplicate = function(nums) {
    
    let no_of_elements = nums.length;
    let set = new Set(nums);
    
    return set.size!==no_of_elements;
    
};
