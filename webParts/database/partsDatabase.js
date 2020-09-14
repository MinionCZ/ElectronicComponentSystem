const {MongoClient} = require('mongodb');
const mongoUrl = "mongodb://localhost:27017/partsdb"
const client = new MongoClient(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})

async function verifyConnection() {
    if (!client.isConnected()) {
        await client.connect()
    }
}

function connectToMongodb() {
    client.connect();
    console.log("Connected")
}
function insertOnePart(partObject){
    verifyConnection()
client.db.collection("parts").insertOne(partObject)
}
function getAllParts(){
    verifyConnection()
    let allParts = client.db("partsdb").collection("parts").find({}).toArray
    return allParts
}
async function isPartInDatabaseByName(name){
verifyConnection()
let component = await client.db("partsdb").collection("parts").findOne({name:name})
return component !== null
}
module.exports = {
    connectToMongodb,
    verifyConnection,
    insertOnePart,
    getAllParts,
    isPartInDatabaseByName
}
