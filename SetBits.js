/*
#CodingNinja's question.
#Write a program to count the no of 1's in the binary representation of a given integer.
*/
function set_bits(n){

      /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
    /**
     * 9%2 = 1
     * 4%2 = 0
     * 2%2= 0
     * 1%2 =1
     * 
     */
  let givenNumber = n;
  let onesCount = 0;
  while (givenNumber > 0) { 
   // console.log(givenNumber);
    remainder = givenNumber % 2;
    if (remainder) { 
      onesCount = onesCount + 1;
    }
    givenNumber = parseInt(givenNumber / 2);
  }
  return onesCount;
}
