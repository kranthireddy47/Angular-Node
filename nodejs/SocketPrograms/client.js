let net= require("net");
let client= net.connect({port:9090,host:"localhost"});
let readline=require("readline");
let r1=readline.createInterface({
    input:process.stdin,
    output:process.stdoutput
})
client.on("connect",()=>{
    console.log("connected to server");
    
})
r1.on("line",(msg)=>{
  client.write(`Client send: ${msg}`);
})