const express = require('express')
// const expressStatic = require('express-static')
const bodyParser = require('body-parser')
const cookieSeesion = require('cookie-session')
const cookieParser = require('cookie-parser')
const common = require('./libs/common')
const router = express.Router()
const login = require('./api/login')

var server = express()
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
server.listen(9090)

// var str = 'mzj0117'
// str = common.md5(str + 'asdfasdfa1)(_)+_)(+)231231asdfas!$@!@#$@#$@$')
// console.log(str)

// 解析cookie
server.use(cookieParser('sdafdsfasdfa'))

// 解析session
server.use(cookieSeesion({
  name: 'sess_id',
  keys: common.arr(1000000),
  maxAge: 3600 * 1000
}))

// 接口定义
// 1.注册
server.use('/api', router)
router.use('/login', login)

// 数据
server.use(bodyParser.urlencoded({extended: false}))
