let fs=require("fs");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
   if(!err){ 
    let db = client.db("meanstack");
    //let cursor = db.collection("product").find();
    let cursor = db.collection("product").find({price:{$gt:60000}});
   // console.log(cursor);
  cursor.each((err,doc)=>{
          if(doc!=null){
              //console.log(doc);
              console.log("id is "+doc._id+"product name is "+doc.pname+"price is "+doc.price);
          }
          client.close(); 
      })
   }
})