

export function getInput(fileLocation: string): string {

    const fs = require("fs")
    return fs.readFileSync(fileLocation, 'utf8')
}