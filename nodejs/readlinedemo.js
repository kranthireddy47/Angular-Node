let obj=require("readline");
let rl=obj.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.question("enter the name: ",(name)=>{
  rl.question("enter the age: ",(age)=>{
    console.log("your name is: "+name);
    console.log("your age is: "+age);
      rl.close();
  })
})
