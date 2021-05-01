let app=require(express)()

app.get("/",(req,res)=>{
     res.send("welcome to express using docker");
})

app.listen(9999,()=>console.log("server is running on"))