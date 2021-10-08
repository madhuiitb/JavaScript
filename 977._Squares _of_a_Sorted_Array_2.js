/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    // const output = nums.map(x=>x*x);
    let n = nums.length;
    
    let left =0, right=n-1;
    let output=[];
    let i=n-1;
    
    while(left <= right){
        let left_sqrt = nums[left]*nums[left];
        let right_sqrt = nums[right]*nums[right]; 
      /* The input is non decreasing in order so the last number always be greater element*/
        if(left_sqrt<right_sqrt){ /* Will compare the first and last elements of squares*/ 
            output[i]=right_sqrt; /* The right side i.e end of the array element square is more will place that in the last place*/
            right--;  
            i--;
        }
        else{
            output[i] = left_sqrt;
            left++;
            i--;
        }
    }
    
    return output;
};
