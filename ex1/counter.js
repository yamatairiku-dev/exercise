'use strict'

function makeCounter () {
  let count = 0
  return function () {
    return ++count
  }
}

const counter = makeCounter()

counter()
counter()
console.log(counter()) // 3が出力される
