const {
    forEach
} = require('async');
const {
    compile
} = require('ejs');
const {
    MongoClient
} = require('mongodb');
const {
    all
} = require('../components');
const PartsToFrontEnd = require('../dataClasses/PartsToFrontEnd')
const mongoUrl = "mongodb://localhost:27017/partsdb"
const client = new MongoClient(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

async function verifyConnection() {
    if (!client.isConnected()) {
        await client.connect()
    }
}

function connectToMongodb() {
    client.connect();
    console.log("Connected")
}

function insertOnePart(partObject) {
    verifyConnection()
    client.db("partsdb").collection("parts").insertOne(partObject)
}

async function getAllParts() {
    verifyConnection()
    let allParts = await client.db("partsdb").collection("parts").find({}).toArray()
    let names = []
    let allTypesOfSockets = new Set()
    let partsMap = new Map()
    for (let i = 0; i < allParts.length; i++) {
        names.push(allParts[i].name.toString())
        partsMap.set(allParts[i].name.toString(), allParts[i])
        allTypesOfSockets.add(allParts[i].pack)
    }
    console.log()
    names.sort()
    allParts = []
    for (let i = 0; i < names.length; i++) {
        allParts.push(partsMap.get(names[i]))
    }
    return new PartsToFrontEnd(allParts, names, Array.from(allTypesOfSockets), allParts.length)
}

async function isPartInDatabaseByName(name) {
    await verifyConnection()
    let component = await client.db("partsdb").collection("parts").findOne({
        name: name
    })
    return component !== null
}

module.exports = {
    connectToMongodb,
    verifyConnection,
    insertOnePart,
    getAllParts,
    isPartInDatabaseByName
}