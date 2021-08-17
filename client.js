'use strict'
const http = require('http')

const proxyServer = ''
const proxyPort = ''
const targetHost = ''
const targetPath = ''
const targetUrl = `http://${targetHost}${targetPath}`

const options = {
  host: proxyServer,
  port: proxyPort,
  path: targetUrl,
  headers: {
    Host: targetHost
  }
}

http.get(options, res => {
  let responseData = ''
  console.log('statusCode', res.statusCode)
  res.on('data', chunk => { responseData += chunk })
  // res.on('end', () => console.log('responseData', JSON.parse(responseData)))
  res.on('end', () => console.log(responseData))
}).end()
