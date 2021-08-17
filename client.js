'use strict'
const http = require('http')

const options = {
  host: 'piproxy2.rikuden.co.jp',
  port: 3128,
  path: 'http://www.jma.go.jp/bosai/forecast/data/forecast/160000.json',
  headers: {
    Host: 'www.jma.go.jp'
  }
}

http.get(options, res => {
  let responseData = ''
  console.log('statusCode', res.statusCode)
  res.on('data', chunk => { responseData += chunk })
  // res.on('end', () => console.log('responseData', JSON.parse(responseData)))
  res.on('end', () => console.log(responseData))
}).end()
