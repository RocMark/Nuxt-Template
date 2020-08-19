const dayjs = require('dayjs')

const logger = (req, res, next) => {
  console.log('\x1B[36m%s\x1B[0m', '==Route==', { route: req.originalUrl, time: dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss') })
  next() // 繼續執行下方的程式碼
}

module.exports = logger
