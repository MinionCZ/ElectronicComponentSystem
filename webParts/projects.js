const express = require('express')
const router = express.Router()
router.get("/projects", function (request, response) {

    response.render("projectsPage.ejs");

})
module.exports = router