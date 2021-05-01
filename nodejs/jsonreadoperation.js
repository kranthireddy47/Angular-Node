let fs=require("fs");
/*fs.readFile("emp.json",(err,data)=>{
  if(!err){
    //console.log("reading success from json");
    let empstring=data.toString();
    let empjson=JSON.parse(empstring);
    console.log("id is: "+empjson.id);
    console.log("name is: "+empjson.name);
    console.log("salary is: "+empjson.salary);
  }
})*/
let data= fs.readFileSync("emp.json");
let empstring=data.toString();
let empjson=JSON.parse(empstring);
console.log("id is: "+empjson.id);
console.log("name is: "+empjson.name);
console.log("salary is: "+empjson.salary);
console.log("other task");
