/*
    Take an array elements mostly duplecates. 
    The task is to find out the first occurrence of the given element.
    If not find then return -1
*/

function first_index(arr ,  ele){

     /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
    const len = arr.length;
    for (let i = 0; i < len; i++) { 
        if (arr[i] === ele) { 
            return i;
        }
    }
    return -1;
}

