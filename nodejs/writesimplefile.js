let fs=require("fs");
let msg="\nnext message added to file";
fs.writeFileSync("info.txt",msg,{flag:"a"});
console.log("data stored into info.txt file");
console.log("done..");
console.log("done..");
