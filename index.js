const array = require('./data.js')
const calc = require('./calc.js')

let prices = array.items.map(e =>  e.price)

console.log('sum: ',calc.add(prices))
console.log('dif: ',calc.subtract(prices))
