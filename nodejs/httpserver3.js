let http=require("http");
let port=9999;
let htmlcontent= `
          <html>
          <head></head>
          <body><h1>welcome to client server application</h1></body>
          </html>
`
let server=http.createServer((request,response)=>{
  console.log("URL: "+request.url);
  console.log("METHODS: "+request.method);
  console.log(request.headers);
  response.end(htmlcontent);
})
server.listen(port,()=>console.log(`server is running on port number ${port}`));
