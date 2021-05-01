let express=require("express");
let app=express();
let port=9090;
let bodyParser=require("body-parser");

app.get("/",(req,res)=>{
   res.send("Welcome to express module");
})
app.get("/aboutus",(req,res)=>{
  res.send("Welcome to aboutus page");
})
app.get("/contactus",(req,res)=>{
  res.send("Welcome to Contactus page");
})
app.get("/login",(req,res)=>{
  res.send("Welcome to Login page");
})
app.get("/singleQuery",(req,res)=>{
  let name=req.query.name;
  res.send("welcome user: "+name);
})
app.get("/multipleQuery",(req,res)=>{
  let id=req.query.id;
  let name=req.query.name;
  let salary=req.query.salary;
  salary=eval(salary)+5000;
  res.send(`your id is ${id} name is:${name} and salary is ${salary}`);
})
app.get("/singlepath/:name",(req,res)=>{
  let userName=req.params.name;
  res.send("welcome user: "+userName);
})
app.get("/multiplepath/:id/:name/:salary",(req,res)=>{
  //res.send(req.params);
  let id=req.params.id;
  let userName=req.params.name;
  let salary=req.params.salary;
  res.send(`${JSON.stringify(req.params)}<br/> id is ${id} <br/> name is ${userName} <br/>  salary is ${salary}`);
})
app.post("/postMethod",(req,res)=>{
  res.send("welcome to post method");
})
app.post("/",(req,res)=>{
  res.send("welcome to post withpot path method");
})
app.post("/storedata",(req,res)=>{
   let name=req.body.name;
   res.send("welcome to node js post method"+name);
})


app.listen(port,()=>console.log(`server running on port number ${port}`));
