const promiseChaining = new Promise((resolve, reject)=>{
  resolve("Promise Chaining");
});

promiseChaining
  .then(function(result){
        console.log(result);
         return new Promise((resolve, reject)=>{resolve("new promise chaining")})
    }).then((result2)=>{
          console.log(result2);
        });
