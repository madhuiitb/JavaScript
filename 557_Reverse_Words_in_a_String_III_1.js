/**
 * @param {string} s
 * @return {string}
 * Runtime: 109 ms, faster than 34.92% of JavaScript online submissions for Reverse Words in a String III.
 * Memory Usage: 45 MB, less than 70.30% of JavaScript online submissions for Reverse Words in a String III.
 * Used split and reverse javascript functions.
 * 
 */
var reverseWords = function(s) {
    //console.log(s.split(' '));
    let new_arr = s.split(' ');
  //  console.log(new_arr.length);
    let n = new_arr.length;
    let str = "";
    for( var i=0; i<n;i++){
        if(i==n-1){
            str = str+ new_arr[i].split('').reverse().join('');
        }
        else{
            str = str+ new_arr[i].split('').reverse().join('')+" ";
        }
            
        //console.log(new_arr[i]);
        
    }
   // console.log(new_arr);
   // return s.join('');
   // str.splice(1,0,str.pop());
    return str;
};
