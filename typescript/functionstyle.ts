//function parameter passing
function empinfo(id:number,name:string,salary:number) {
  console.log("is is "+id);
  console.log("Name is "+name);
  console.log("Saary is "+salary);
}
empinfo(100,"kranthi",23456);
function welcome(namm:string) : string{
  return "Welcomeee"+namm;
}
console.log(welcome("kranthi kumar reddy"));
function add(a:number,b:number):void {
  let sum=a+b;
  console.log(sum);

}
add(200,300);
function person(id?:number,name:string="unknown",age:number=0)
 {
console.log("id is "+id);
console.log("name is "+name);
console.log("Age is "+age);



}
person(23,"Ravi",45);
person(25,"ramu",);
person();
