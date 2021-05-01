let http=require("http");
let port=9999;
let htmlcontent= `
          <html>
          <head></head>
          <body><h1>welcome to client server application</h1></body>
          </html>
`
let server=http.createServer((request,response)=>{
  response.end(htmlcontent);
})
server.listen(port,()=>console.log(`server is running on port number ${port}`));
