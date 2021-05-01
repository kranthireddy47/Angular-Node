let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
    if(!err)
    {
        let db= client.db("meanstack");
        db.collection("chatlogg").insertOne({name:"chandhu",message:"Shopping at 5 pm"},(err,result)=>{
            if(!err){
                console.log(result.insertedCount);
                    }else {
                        console.log(err);
                    }
            client.close();
        });
    }
});
