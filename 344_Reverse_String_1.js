
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 
 * Runtime: 1488 ms, faster than 5.04% of JavaScript online submissions for Reverse String.
 * Memory Usage: 47.5 MB, less than 11.26% of JavaScript online submissions for Reverse String.
 * Using Javascript functionalities i.e Splice is good.
 * Splice functionality is spicle(start_position, no_of_items_to_delete, item1, item2, item3,....itemN)
 * splice(start_position)
 * splice(start_position, no_of_items_to_delete)

 */
var reverseString = function(s) {
    
   // console.log(s);
    var len = s.length;
    
    for(var i=0;i<len;i++){
        s.splice(i,0, s.pop());
    }
    return s;
};
