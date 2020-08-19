const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./middleware/cors')
const logger = require('./middleware/logger')
const testRoute = require('./routers/test')

const app = express()
const port = process.env.PORT || 3015

// 引入 middlewares Ex: CORS、Logger、bodyParser ( Code 越上面會越先執行 )
app.use(cors)
app.use(logger)
app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// 模組化路由
app.use('/api', testRoute)

// 監聽 Port 事件
const portListenEvent = () => {
  const baseURL = 'http://localhost'
  const serverURL = `${baseURL}:${port}`
  console.log(`mock server listening at ${serverURL}`)
}
app.listen(port, portListenEvent)
