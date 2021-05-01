/*var obj=require("util");
let name="RaJ Deep";
let age=21;
let empinfo={"id":12,"name":"kranthi","salary":87990,"skill":["c","java","python"]}
var formdetails=obj.format("my name is %s and age is %d",name,age);
var formatjsondata=obj.format("employee details %j",empinfo);
console.log(formdetails);
console.log(formatjsondata);
console.log(empinfo);
console.log("my name is "+name+"and age is "+age);
console.log(obj.format("my name is %s and  age is %d",name,age));
console.log('my name is ${name} and age is ${age} json data  ${empinfo.id}');*/

var util=require("util");
var fs=require("fs");
var empinfoo=require("./empinfoo");
var n=10;
var obj=new Date();
class Employee{
  constructor(id,name){
    this.id=id;
    this.name=name;
  }
  info(){

  }
}
console.log(util.isPrimitive(n));
console.log(util.isObject(obj));
console.log(util.isString(n));
console.log(util.isString("ayhdgys"));


let emp1={"id":12,"name":"jjwnckwe"}
let emp=new Employee(12,"ramesh");
console.log(util.inspect(Employee));
console.log(util.inspect(emp));
console.log(util.inspect(emp1));
console.log(util.inspect(empinfoo,{showHidden:true}))
console.log(util.inspect(emp.info()));
