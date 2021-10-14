/**
 * @param {string} s
 * @return {string}
 * Runtime: 126 ms, faster than 23.93% of JavaScript online submissions for Reverse Words in a String III.
 * Memory Usage: 45.2 MB, less than 50.82% of JavaScript online submissions for Reverse Words in a String III.
 * Used only split function to split the string.
 * Used new_words array for reversing the words
 * Not using reverse javascript function
 * Time complexity is no of words times with the longest words i.e let say no_of_words = n, and the langest word length is m 
 * Which gives the O(n*m) the time complexity and for split it takes javascitp default time.
 */
var reverseWords = function(s) {
    //console.log(s.split(' '));
    let new_arr = s.split(' ');
  //  console.log(new_arr.length);
    let n = new_arr.length;
    let str = "";
    for( var i=0; i<n;i++){
        let new_words = new_arr[i].split('');
        let new_words_len = new_words.length;
        let left=0, right = new_words_len-1;
        while(left < right){
            let temp = new_words[left];
            new_words[left] = new_words[right];
            new_words[right] = temp;
            left++;
            right--;
        }
        new_arr[i] = new_words.join('');
       // console.log(new_arr[i]);
        
       if(i==n-1){
           str = str + new_arr[i];
       }
        else{
            str = str + new_arr[i]+" ";
        }
            
        //console.log(new_arr[i]);
        
    }
   // console.log(new_arr);
   // return s.join('');
   // str.splice(1,0,str.pop());
    return str;
};
