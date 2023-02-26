/*
Given a range i.e start number and end number. Find out the total prime numbers present in the range. 
EX: 2, 10
prime numbers are: 2, 3, 5,7
Result: totalPrimeCount =>4
*/
function prime(s , e){
		
   /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
    let totalPrimeCount = 0;
    for (let i = s; i <= e; i++) { 
        let count = 0;
        for (j = 1; j <= i; j++) { 
            if (i % j == 0) { 
                count = count + 1;
            }
        }
        if (count === 2) { 
            totalPrimeCount = totalPrimeCount + 1;
        }
    }
    return totalPrimeCount;
}
