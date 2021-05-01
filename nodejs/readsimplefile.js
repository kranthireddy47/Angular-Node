let fs=require("fs");
let msg=fs.readFileSync("info.txt");
console.log(msg.toString());
