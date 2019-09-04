const add = (array) => {
    return array.reduce((a, b) => a + b)
}

const subtract = (array) => {
    return array.reduce((a, b) => a - b)
}

module.exports = {
    add: add,
    subtract: subtract
}