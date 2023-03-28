function remove_character(input , c){ 
    const chr = c.charCodeAt(0);
    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output String */
    let len = input.length;
    let arr = input.split("");
    //console.log(arr.length)
    let resultArray = "";
    for (let i = 0; i < len; i++) { 
       // console.log(input[i]);
        let temp = input[i].charCodeAt(0);
        if (temp !== chr) {
           // console.log("test")
            resultArray = resultArray + input[i];
          //  console.log(arr);
            arr.splice(i,1);
            //console.log(input);
        }
    }
    let result = arr.join();
    const reg = /\,/g;
    result = result.replace(reg, '');
   // console.log(result)
   //result= result.replaceAll(',', '');
    return resultArray;
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
      let c = String(readLine());
      
      let res = remove_character(str , c);
      console.log(res);
  
  }
