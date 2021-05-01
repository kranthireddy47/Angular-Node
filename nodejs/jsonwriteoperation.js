let fs=require("fs");
var empobj='{"id":100,"name":"ravi","salary":1234}';
var empjson=JSON.parse(empobj);
console.log("ID Is"+empjson.id);
var empstring=JSON.stringify(empjson);
fs.writeFile("emp.json",empstring,(err)=>{
  if(!err){
    console.log("data storder in json format");
  }
})
