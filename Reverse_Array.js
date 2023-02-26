/*
Given an array, reverse all the elements.
*/

function reverse(arr){

     /* Write your code here
    No need to specify return type 
    Input and output already taken care of */

    // You don't need to return anything or keep any new array , just reverse the array in-place
    /*
    1,2=> i<j => 2,1
    1,2,3=> i<j =>3,...,1
    1,2,3,4=> i<j=
    */
    const len = arr.length;
    for (let i = 0,j=len-1; i < len, i<j; i++,j--) { 
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

