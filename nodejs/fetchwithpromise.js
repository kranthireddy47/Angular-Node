/*var obj=new Promise((resolve,reject)=>{
  //resolve("promise resolved successfully.."),
  reject("error generated")
})*/
//fetch("https://jsonplaceholder.typicode.com/todos").then(data=>console.log(data)).catch(error=>console.log(error));

var fetch= require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>console.log(data)).catch(error=>console.log(error));
