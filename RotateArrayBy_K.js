function rotate(arr , k){

      /* Write your code here
      Given an array with N elements
      Rotate the array by k elements
    */

    // You don't need to return anything , just rotate the array in-place
    /*
      1,2,3=> 2%3=2 => 2,3,1 => 3,1,2
      1,3,2=> 7%3= 1 =>3,2,1=> 

    */

  const len = arr.length;

  /* this steps is important 
  as no of iterations we need to make on the given input
  */
  const steps = parseInt(k % len);
    for (let i = 0; i<steps; i++) { 
      let temp = arr.shift();
      arr.push(temp);
    }
  }
  
