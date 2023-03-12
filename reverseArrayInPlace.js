function reverse(arr){

     /* Write your code here
    No need to specify return type 
    Input and output already taken care of */

    // You don't need to return anything or keep any new array , just reverse the array in-place

    let len = arr.length;
    for (let i = 0,j=len-1; i < len && i<j; i++,j--) { 
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
