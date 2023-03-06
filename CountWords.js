function count_words(str){
    
   /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
    let words = str.split(' ');
    return words.length;   
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}


function main() {
    let str = String(readLine());
    let res = count_words(str);
    console.log(res);
   
}
