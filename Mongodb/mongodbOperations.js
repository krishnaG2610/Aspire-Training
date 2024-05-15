// Show existing databases
show databases;

// Switch to the aspire database
use aspire;

// Show collections 
show collections;

// Insert documents into the 'events' collection
db.events.insertOne({"_id":101,"name":"birthday","location":"pondy"});
db.events.insertOne({"_id":102,"name":"wedding","location":"kochi"});
db.events.insertMany([
    {"_id":103,"name":"meetup","location":"chennai"},
    {"_id":104,"name":"sports","location":"chennai"},
    {"_id":105,"name":"Graduation day","location":"hyderabad"}
]);

// Delete a single document 
db.events.deleteOne({ "_id": 105 });

// Delete multiple documents 
db.events.deleteMany({ "location":"chennai" });

// Insert multiple documents 
db.events.insertMany([
    {"_id":103,"name":"conference","location":"guindy"},
    {"_id":104,"name":"press meet","location":"banglore"},
    {"_id":105,"name":"conference","location":"sriperumbathur"},
]);

// Find all documents 
db.events.find({});

// Find specific documents
db.events.find({"_id":"104"});

//find({query},{projection})
db.events.find({"name":"conference","location":"guindy"})
db.events.find({}, { "name": 1 })

//sort
db.events.find().sort({_id: -1})

//update single document
db.events.updateOne({"_id":105}, {$set:{"name":"f1"}})

// Drop the events collection
db.events.drop()
