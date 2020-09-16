class Part {
    constructor(name, type, packageType, pack, quantity, datasheets) {
        this.name = name
        this.type = type
        this.packageType = packageType
        this.pack = pack
        this.quantity = quantity
        this.datasheets = datasheets
        console.log(getDate())
        this.dateOfChange = getDate()
    }
    isQuantityNumber() {
        let numbers = "0123456789"
        if (parseInt(this.quantity)) {
            for (let i = 0; i < this.quantity.length; i++) {
                let isThisOneNumber = false
                for (let j = 0; j < numbers.length; j++) {
                    if (numbers.charAt(j) === this.quantity.charAt(i)) {
                        isThisOneNumber = true
                        break
                    }
                }
                if (!isThisOneNumber) {
                    return false
                }
            }
            return true
        }
        return false
    }

}

function getDate() {
    var datetime = new Date();
    let year = datetime.getFullYear()
    let month = datetime.getMonth()
    let day = datetime.getDate()
    return day + "." + (month + 1) + "." + year

}

module.exports = Part