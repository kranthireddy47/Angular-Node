let http=require("http");
let server=http.createServer((request,response)=>{
  response.end("welcome to client server application");
})
server.listen(9999,()=>console.log("server is running on port number 9999"));
