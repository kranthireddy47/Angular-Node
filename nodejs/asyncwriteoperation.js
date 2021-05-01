let fs=require("fs");
let msg="\n next message store through FS module";
fs.writeFile("info1.txt",msg,{flag:"a"},(err)=>{
  if(!err){
    console.log("data store in a file");
  }
});
console.log("done..");
console.log("done..");
