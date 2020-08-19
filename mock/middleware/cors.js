// Dealing CORS
const cors = (req, res, next) => {
  // 允許 CORS
  res.header('Access-Control-Allow-Origin', '*')
  // 允許那些方法
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH'
  )
  // 允許那些表頭
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-mock-response-code'
  )
  next()
}

module.exports = cors
