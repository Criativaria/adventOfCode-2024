

export function getInput(fileLocation: string) {

    const fs = require("fs")
    return fs.readFile({ fileLocation }, 'utf8', function (err: any, data: any) { // ler o txt
        if (err) { return console.log(err); }
        return data
    })
}