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
   Product.deleteOne({_id:100},(err,result)=>{
       if(!err){
         // console.log("record successfully deleted");
         if(result.deletedCount>0)
         {
            console.log("record successfully deleted");
         }
         else{
             console.log("record not present");
         }
       }
       obj.disconnect();
   })
});