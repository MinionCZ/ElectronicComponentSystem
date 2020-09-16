let partsCount = 0
let partsData = []
class PartData {
    constructor(name, type, packageType, pack, quantity, date) {
        this.name = name,
            this.type = type,
            this.packageType = packageType,
            this.pack = pack,
            this.quantity = quantity,
            this.date = date
    }
}





function initValues(partsCountThis) {
    partsCount = partsCountThis
    for (let i = 0; i < partsCount; i++) {
        console.log(document.getElementById("component" + i).value)
        partsData.push(parseData(document.getElementById("component" + i).value))
    }
}
function parseData(stringToParse) {
    let data = []
    for (let i = 0; i < 6; i++) {
        let cropLength = parsePieceOfData(stringToParse)
        data.push(stringToParse.substring(0, cropLength))
        stringToParse = stringToParse.slice(cropLength + 1, stringToParse.length)
    }
    return new PartData(data[0], data[1], data[2], data[3], data[4], data[5])

}
function parsePieceOfData(stringToParse) {
    for (let i = 0; i < stringToParse.length; i++) {
        if (stringToParse.charAt(i) === ";") {
            return i
        }
    }
}
function createTable(parts) {
    console.log(parts)
}