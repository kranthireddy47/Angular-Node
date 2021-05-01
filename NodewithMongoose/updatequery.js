let obj = require("mongoose");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";

const mongodboption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

obj.connect(url,mongodboption);
let db = obj.connection;
db.on("error",(err)=>console.log(err));
db.once("open",()=>{
    //CREATING SCHEMA USING MONGOOSE OBJECT
    let productschema = obj.Schema({
        _id:Number,
        pname:String,
        price:Number
    });
    //CREATING MODEL USING SCHEMA
    let Product = obj.model("",productschema,"Product");
   
    //CEATING REFERENCE USING MODEL
    Product.updateOne({price:{$gt:70000}},{$set:{price:80000}},(err,result)=> {    
        if(!err){
            if(result.nModified>0){
                console.log("Record updated")
            }else {
                console.log("Record didn't update")
            }
        }
        obj.disconnect();
   })
});