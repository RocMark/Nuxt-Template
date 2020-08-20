const express = require('express')
const app = express()

// 使用 ~/api/test 進入此路由
app.get('/test', (req, res) => {
  res.status(200)
  res.json({ title: 'Mock!' })
})

app.post('/test', (req, res) => {
  console.log('body', req.body)
  res.send('POST Success')
})

module.exports = app
