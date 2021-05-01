let num:Array<number>=[1,2,4,5,6,7,8];
console.log("array using loops");
for(let i=0;i<num.length;i++)
{
  console.log(num[i]);

}
console.log("using for in loop");
for(let i in num){
  console.log("index is: "+i+"value is: "+num[i]);

}
console.log("using of loop");
for(let i of num){
  console.log("value is: "+i);

}
