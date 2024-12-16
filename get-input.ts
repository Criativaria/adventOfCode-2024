

export function getInput(fileLocation: string) {

    const fs = require("fs")
    return fs.readFileSync(fileLocation, 'utf8')
}