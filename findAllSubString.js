function substrings(str){
    
    /* Write your code here
    Input has been taken care of, you have to output all the substrings in next line */
    let len = str.length;
   // console.log(strArray);
    //a
    //b
    //ab
    let result = [];
    for (let i = 0; i < len; i++) { 
        for (let j = i+1 ; j <=len; j++) { 
           // console.log(result);
            console.log(str.slice(i, j));
        }
    }
    //console.log(result);
}
