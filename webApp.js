const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const mainRouter = express.Router();
const path = require("path")
var bodyParser = require('body-parser')
app.use(express.urlencoded({ extended: true }));

const components = require("./webParts/components.js")
const projects = require("./webParts/projects.js")
const changes = require("./webParts/changes.js")
const database = require('./webParts/database/partsDatabase.js')
app.use(express.static("public"))
app.use(components)
app.use(projects)
app.use(changes)
app.set('view-engine', 'ejs')



const server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    database.connectToMongodb()
     })
 app.get("/", function(requset, response){

    response.render("mainPage.ejs");
} )

