
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

function createTable() {
    let table = document.getElementById("componetsTable").innerHTML
    let components = sortTable(partsData)
    console.log(components)
    table = ""
    for (let i = 0; i < components.length; i++) {
        table += "<tr>"
        table += "<td>" + components[i].name + "</td>"
        table += "<td>" + components[i].type + "</td>"
        table += "<td>" + components[i].packageType + "</td>"
        table += "<td>" + components[i].quantity + "</td>"
        table += "<td>" + components[i].date + "</td>"
        table += "/<tr>"
    }
    console.log(table)
    document.getElementById("componentsTable").innerHTML = table
}

function sortTable(partsToSort) {
    let sortBy = document.getElementById("sortBy").value
    let order = document.getElementById("orderBy").value
    let sortedParts = []
    switch (sortBy) {
        case "name":
            sortedParts = sortArrayByName(partsToSort)
            break
        case "type":
            sortedParts = sortArrayByType(partsToSort)
            break
        case "date":
            sortedParts = sortArrayByDate(partsToSort)
            break
        case "packageType":
            sortedParts = sortArrayByPackageType(partsToSort)
            break
        case "quantity":
            sortedParts = sortArrayByQuantity(partsToSort)
            break
        case "package":
            sortedParts = sortArrayByPackage(partsToSort)
            break
    }
    if (order === "asc") {
        return sortedParts
    }
    return sortedParts.reverse()
}

function sortArrayByName(partsToSort, ascending) {
    let names = []
    let map = new Map()
    for (let i = 0; i < partsToSort.length; i++) {
        names.push(partsToSort[i].name)
        map.set(partsToSort[i].name, partsToSort[i])
    }
    partsToSort = []
    names.sort()
    if (!ascending) {
        names.reverse()
    }
    for (let i = 0; i < names.length; i++) {
        partsToSort.push(map.get(names[i]))
    }
    return partsToSort
}

function sortArrayByType(partsToSort, ascending) {
    let types = []
    let map = new Map()
    for (let i = 0; i < partsToSort.length; i++) {
        types.push(partsToSort[i].type)
        map.set(partsToSort[i].type, partsToSort[i])
    }
    partsToSort = []
    types.sort()
    if (!ascending) {
        types.reverse()
    }
    for (let i = 0; i < types.length; i++) {
        partsToSort.push(map.get(types[i]))
    }
    return partsToSort
}

function sortArrayByPackageType(partsToSort, ascending) {
    let packageTypes = []
    let map = new Map()
    for (let i = 0; i < partsToSort.length; i++) {
        packageTypes.push(partsToSort[i].packageType)
        map.set(partsToSort[i].packageType, partsToSort[i])
    }
    partsToSort = []
    packageTypes.sort()
    if (!ascending) {
        packageTypes.reverse()
    }
    for (let i = 0; i < packageTypes.length; i++) {
        partsToSort.push(map.get(packageTypes[i]))
    }
    return partsToSort
}



function sortArrayByQuantity(partsToSort, ascending) {
    let quantity = []
    let map = new Map()
    for (let i = 0; i < partsToSort.length; i++) {
        quantity.push(partsToSort[i].quantity)
        map.set(partsToSort[i].quantity, partsToSort[i])
    }
    partsToSort = []
    quantity.sort()
    if (!ascending) {
        quantity.reverse()
    }
    for (let i = 0; i < quantity.length; i++) {
        partsToSort.push(map.get(quantity[i]))
    }
    return partsToSort
}


function sortArrayByPackage(partsToSort, ascending) {
    let packages = []
    let map = new Map()
    for (let i = 0; i < partsToSort.length; i++) {
        packages.push(partsToSort[i].pack)
        map.set(partsToSort[i].pack, partsToSort[i])
    }
    partsToSort = []
    packages.sort()
    if (!ascending) {
        packages.reverse()
    }
    for (let i = 0; i < packages.length; i++) {
        partsToSort.push(map.get(packages[i]))
    }
    return partsToSort
}



function sortArrayByDate(partsToSort) {
    let dates = []
    let map = new Map()
    for (let i = 0; i < partsToSort.length; i++) {
        let currentDate = partsToSort[i].date
        let day = substring(0, parseNumberTillDot(currentDate))
        currentDate.slice(parseNumberTillDot(currentDate) + 1, currentDate.length)
        let month = substring(0, parseNumberTillDot(currentDate))
        currentDate.slice(parseNumberTillDot(currentDate) + 1, currentDate.length)
        let year = currentDate
        let date = parseInt(year) * 10000 + parseInt(month) * 100 + parseInt(day)
        dates.push(date)
        map.set(date, partsToSort[i])
    }
    dates.sort()
    partsToSort = []
    for (let i = 0; i < dates.length; i++) {
        partsToSort.push(map.get(dates[i]))
    }
    return partsToSort
}

function parseNumberTillDot(date) {
    for (let i = 0; i < date.length; i++) {
        if (date.charAt(i) === '.') {
            return i
        }
    }
}