const path = require("path").join(__dirname)
const models = {}

/**
 * Auto loads models inside this directory.
 * File must end with '.model.js' substring.
 */
require("fs")
    .readdirSync(path)
    .filter(file => file.endsWith('.model.js'))
    .forEach((file) => {
        const name = file.split('.')[0]
        models[name] = require("./" + file)
    });

module.exports = models