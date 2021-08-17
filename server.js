const http = require('http')

const port = 8080

http.createServer((req, res) => {
  console.log(req.headers)
  res.end('Hello!')
}).listen(port)

console.log(`Server listen at port ${port}`)
