const {
    compile
} = require('ejs');
const express = require('express')
const router = express.Router()
const partsDatabase = require('./database/partsDatabase.js')
const Part = require('./dataClasses/Part.js')

router.get("/newComponent", function (request, response) {
    response.render("newComponentPage.ejs", {
        error: "",
        componentInfo: new Part("", "", "", "", "", "")
    });
})
router.post("/newComponent", async function (request, response) {

    let newComponent = new Part(
        request.body.name,
        request.body.type,
        request.body.packageType,
        request.body.package,
        request.body.quantity,
        request.body.datasheets
    )
    if (newComponent.isQuantityNumber()) {
        console.log(await partsDatabase.isPartInDatabaseByName(newComponent.name))
        if(!await partsDatabase.isPartInDatabaseByName(newComponent.name)){
        await partsDatabase.insertOnePart(newComponent)
        response.render("newComponentPage.ejs", {
            error: "Component has been succesfully saved into database",
            componentInfo: newComponent
        });
        }else{
            response.render("newComponentPage.ejs", {
                error: "This component is already in database",
                componentInfo: newComponent
            });
        }

    } else {
        response.render("newComponentPage.ejs", {
            error: "Component had wrong quantity",
            componentInfo: newComponent

        });
    }
})
router.get("/components", async function (request, response) {
    let dataToFrontEnd = await partsDatabase.getAllParts();
    console.log((dataToFrontEnd.allParts))
    response.render("componentsPage.ejs",{
    allParts:dataToFrontEnd.allParts,
    namesOfParts: dataToFrontEnd.namesOfParts,
    allTypesOfSockets: dataToFrontEnd.allTypesOfSockets,
    partsCount: dataToFrontEnd.partsCount
    });
})






module.exports = router