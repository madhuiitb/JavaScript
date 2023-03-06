function reverse(input){

    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output String */
    let noOfWords = input.split(" ");
   // console.log(noOfWords.length);
   // let arr2 = [...noOfWords];
    let result = "";
    let wordsLength = noOfWords.length;
    for (let i = 0; i < wordsLength; i++) { 
        let arr = noOfWords[i];
        let eachWordLength = arr.length;
        let temp = "";
        for (let j = 0; j < eachWordLength; j++) { 
            temp = arr[j]+temp;
          // console.log(temp);
        }
       // console.log(temp)
       // console.log(arr);
        if (result.length === 0) {
            result = temp;
        }
        else { 
            result = result +" "+temp;
        } 
        
    }
    return result;
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
       let res = reverse(str);
       console.log(res);
   
   }
