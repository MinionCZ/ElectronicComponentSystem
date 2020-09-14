
function cropQuery(location, targetLocation) {
    let newLocation = ""
    let counter = 0
    console.log(location.length)

    for (let i = 0; i < location.length; i++) {
        let actualChar = location.charAt(i)
        if (actualChar === '/') {
            counter++
        }
        if (counter === 3) {
            break;
        }
        newLocation += actualChar
    }
    return newLocation + targetLocation
}