'use stict'

const num1 = process.argv[2]
const num2 = process.argv[3]

const { culc } = require('./culc')
const { fact } = require('./culc')
const { fact2 } = require('./culc')

console.log(culc.div(num1, 2))

console.log(fact(num2))
console.log(fact2(num2))
