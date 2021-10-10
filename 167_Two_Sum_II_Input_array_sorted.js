/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Brute force approach i.e O(n*n)
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            let sum = numbers[i]+numbers[j];
            if(sum==target){
                return [i+1,j+1];
            }
        }
    }
    
};
