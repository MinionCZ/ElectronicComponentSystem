const express = require('express')
const router = express.Router()
const partsDatabase = require('./database/partsDatabase.js')
router.get("/components", function (request, response) {
    let allParts = partsDatabase.getAllParts();
    response.render("componentsPage.ejs");
})
router.get("/newComponent", function (request, response) {
    response.render("newComponentPage.ejs", {
        error: ""
    });
})
router.post("/newComponent", async function (request, response) {
    console.log(request.body.name)

    response.render("newComponentPage.ejs", {
        error: "Component has been succesfully saved into database"
    });

})
module.exports = router