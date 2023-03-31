const promise = new Promise((resolve, reject)=>{
  reject("First promise");
});

promise
  .then((result)=>console.log(result))
  .catch((error)=>console.log(error));
