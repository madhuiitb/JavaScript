/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Runtime: 106 ms, faster than 35.66% of JavaScript online submissions for Two Sum II - Input array is sorted.
 * Memory Usage: 39.4 MB, less than 18.11% of JavaScript online submissions for Two Sum II - Input array is sorted.
 * Using Javascript methods. these are not feasible for learning.
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;
    let map = {};
    for(let i=0;i<n;i++){
        let val = numbers[i];
        let temp = target-val;
        if(map[temp]>=0){
            return [map[temp]+1, i+1]
        }
        else{
            map[val]=i;
        }
    }
    
};
