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
    //USING THIS MODULE WE CAN CRETAE MORE THAN ONE REFERENCE
    //CREATING REFERENCE
    let p1= new Product({_id:102,pname:"laptop",price:78000});
    p1.save((err,result)=>{
        if(!err){
            console.log("result inserted successfully"+result);
        }else {
            console.log(err);
        }
        obj.disconnect();  //close the connection
    });
});