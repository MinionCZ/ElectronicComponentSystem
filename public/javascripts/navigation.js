function toMainPage() {
    let location = window.location.toString()
    window.location = cropQuery(location, "/")
}

function toComponentsPage() {
    let location = window.location.toString()
    window.location = cropQuery(location, "/components")
}

function toChangesPage() {
    let location = window.location.toString()
    window.location = cropQuery(location, "/changes")
}

function toProjectsPage() {
    let location = window.location.toString()
    window.location = cropQuery(location, "/projects")
}

function openComponentWindow() {
    let location = window.location.toString()
    let newQuery = cropQuery(location, "/newComponent");
    window.location = newQuery
}

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