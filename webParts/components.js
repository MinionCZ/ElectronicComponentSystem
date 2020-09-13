const express = require('express')
const router = express.Router()
router.get("/components", function (request, response) {

    response.render("componentsPage.ejs");

})
module.exports = router