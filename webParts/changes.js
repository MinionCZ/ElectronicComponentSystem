const express = require('express')
const router = express.Router()
router.get("/changes", function (request, response) {

    response.render("changesPage.ejs");

})
module.exports = router