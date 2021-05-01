let http=require("http");
let url=require("url");
let port=9999;
let server=http.createServer((request,response)=>{
  let urldetails=request.url;
  let details=url.parse(urldetails,true).query;
  console.log(urldetails);
  var name=details.name;
  var age=details.age;

  response.end("welcome to console MY name is:"+name+"and age is"+age);
})
server.listen(port,()=>console.log(`server running on port number ${port}`));
