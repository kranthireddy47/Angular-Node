let fs=require("fs");
var empobj='{"id":100,"name":"ravi","salary":1234}';
var empobj1='{"id":101,"name":"raju","salary":123234}';
var empobj2='{"id":102,"name":"ramu","salary":129634}';
var emparr= new Array();
emparr.push(empobj);
emparr.push(empobj1);
emparr.push(empobj2);
var empjson=JSON.parse(emparr);
fs.writeFileSync("emp2.json",empjson);
console.log('file written');
let data=fs.readFileSync("emp2.json");
console.log(data.toString);
let jsonString=JSON.parse(jsonString);
console.log("no of record are"+anotherJSON.length);
console.log(anotherJSON[0].id);
