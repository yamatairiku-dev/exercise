function compareFunc (a, b) {
  return b - a
}

const num = [5, 3, 10, 6, 55]
num.sort(compareFunc)

console.log(num)
