/**
 * @param {number[]} nums
 * @return {number[]}
 * The approach 1 is taking the worst case i.e taking O(n*n) time.
 */
var sortedSquares = function(nums) {
    
    const output = nums.map(x=>x*x);
    let n = output.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(output[i]>output[j]){
                let temp = output[j];
                output[j] = output[i];
                output[i] = temp;
            }
        }
    }
    return output;
};
