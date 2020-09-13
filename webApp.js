const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const mainRouter = express.Router();
const path = require("path")
const components = require("./webParts/components.js")
const projects = require("./webParts/projects.js")
const changes = require("./webParts/changes.js")
app.use(express.static("public"))
app.use(components)
app.use(projects)
app.use(changes)
const server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
     })
 app.get("/", function(requset, response){

    response.render("mainPage.ejs");
} )

