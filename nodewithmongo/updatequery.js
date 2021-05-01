let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
   if(!err){ 
    let db = client.db("meanstack");
    db.collection("product").updateOne({_id:100},{$set:{price:60000}},(err,result)=>{
        if(!err){
            if(result.modifiedCount>0){
                console.log("record  updated successfully");
            }else {
            console.log("record didn't update");
            }
        }
        client.close();
    })
   }
})