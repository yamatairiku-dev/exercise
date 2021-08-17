'use strict'
const https = require('https')
const tunnel = require('tunnel')

const proxyServer = ''
const proxyPort = ''
const targetHost = ''
const targetPath = ''
const targetUrl = `https://${targetHost}${targetPath}`

const tunnelAg = tunnel.httpsOverHttp({
  proxy: {
    host: proxyServer,
    port: proxyPort
  }
})

const options = {
  host: targetHost,
  port: 443,
  path: targetUrl,
  agent: tunnelAg
}

https.get(options, res => {
  res.on('data', chunk => {
    console.log(chunk.toString())
  })
})
