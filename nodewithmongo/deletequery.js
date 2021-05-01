let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
   if(!err){ 
    let db = client.db("meanstack");
    db.collection("product").deleteOne({_id:100},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                console.log("one record deleted successfully");
            }
            else{
                console.log("record not present");
            }
        }
        client.close();
    })
   }
})