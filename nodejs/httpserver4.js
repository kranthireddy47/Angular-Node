let http=require("http");
let port=9999;
let server=http.createServer((request,response)=>{
  if(request.url=="/aboutus"){
    response.write("welcome to aboutus");
  }
  else if(request.url=="/contactus"){
      response.write("welcome to contact us");
  }
  else if(request.url=="/login"){
      response.write("welcome to login page");
  }
  else {
    response.write("page not found");
  }
  response.end();
})
server.listen(port,()=>console.log(`server is running on port number ${port}`));
