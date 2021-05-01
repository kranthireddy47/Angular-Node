var app= require("express")();
var ws=require("express-ws")(app);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.ws("/",(socket,res)=>{
    socket.send("message from server");
})
app.on("open",(data)=>{
    console.log(data.toString());
})
app.listen(9090,()=>console.log("we socket running on port number 9090"));