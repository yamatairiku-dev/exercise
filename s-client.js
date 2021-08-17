'use strict'
const https = require('https')
const tunnel = require('tunnel')

const tunnelAg = tunnel.httpsOverHttp({
  proxy: {
    host: 'piproxy2.rikuden.co.jp',
    port: 3128
  }
})

const options = {
  host: 'www.jma.go.jp',
  port: 443,
  path: 'https://www.jma.go.jp/bosai/forecast/data/forecast/160000.json',
  agent: tunnelAg
}

https.get(options, res => {
  res.on('data', chunk => {
    console.log(chunk.toString())
  })
})
