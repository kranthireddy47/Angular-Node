/*var obj=new Promise((resolve,reject)=>{
  //resolve("promise resolved successfully.."),
  reject("error generated")
});

obj.then(res=>console.log("resolved")).catch(error=>console.log("rejected"));*/

let emp={"id":100,"name":"kramthi","salary":20000};
let obj=new Promise((resolve,reject)=>{
//  resolve(emp);
  reject("error generated");
});
obj.then(result=>console.log(result)).catch(error=>console.log(error));
