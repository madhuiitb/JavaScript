/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Runtime: 110 ms, faster than 33.11% of JavaScript online submissions for Two Sum II - Input array is sorted.
 * Memory Usage: 38.6 MB, less than 94.47% of JavaScript online submissions for Two Sum II - Input array is sorted.
 * Having two pointer i.e left side pointer points to the start of the array and right side pointer points to the end of the array
 * if the sum of the two numbers are greater than the target that means the right pointers has to get decrement why because right side pointer is having bigger number 
 * if the sum of the two numbers are smaller than the target that means the left pointers has to get increament why because the left pointer element is smaller than the target so increment
 * Total time taking is only one scan from both the ends so it is scanning all the elements in worst case i.e N elements => O(n) is Time Complexity
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;
    
    let left=0, right=n-1;
    while(left<right){
        let sum = numbers[left]+numbers[right];
        if(sum===target){
            return [left+1, right+1];
        }
        else if( sum >= target){
            right--;
        }
        else{
            left++;
        }
    }
    return [];
    
};
