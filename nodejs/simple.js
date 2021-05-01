module.exports.a = "Welcome to node js examples";
module.exports.b = "Welcome to simple examples";
module.exports.dis= function(){
  return "function nodejs";
}
module.exports.add= function(a,b){
  return a+b;
}
let sayHello=(name)=>"Welcome to nodejs application"+name;
class Employee{
  display(){
    console.log("display function");
  }
}
exports.Employee=Employee;
exports.sayHi= sayHello;
