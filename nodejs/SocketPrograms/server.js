let net= require("net");
let server= net.createServer();
console.log("hi");
server.on("connection",(socket)=>{
 console.log("new client connected");
 socket.on("data",(msg)=>{
     console.log(msg.toString());
 })
});

console.log("hello");
server.listen(9090,()=>console.log("Server is running on port number 9090"));