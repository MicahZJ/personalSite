const express = require('express')
const db = require('../connectionDB')
const common = require('../libs/common')
const router = express.Router()

// router.use((req, res, next) => {
//   // console.log(req.session['admin_id'])
//   console.log(req.originalUrl + '+' + req.baseUrl)
//   if (!req.session['admin_id'] && req.baseUrl !== '/api/login') {
//     console.log('1111')
//     res.send({status: 400, msg: '未登录状态，请登录'}).end()
//   } else {
//     next()
//   }
// })
router.get('/', (req, res) => {
  // console.log(req.query)
  // 获取用户名
  let username = req.query.user
  // 获取密码，并进行md5加密
  let password = common.md5(req.query.password + common.MD5_SUFFIX)
  // 查询数据库，进行验证
  db.query(`SELECT * FROM login_user WHERE username='${username}'`, (err, data) => {
    if (err) {
      // 查询出错
      console.log('进入error')
      res.status(500).send('error').end()
    } else {
      // 查询成功
      if (data.length === 0) {
        // 没有查到用户
        console.log('没有这个用户')
        res.send({status: 400, msg: '用户名输入不正确'}).end()
      } else {
        // 用户密码都验证成功，进入后台
        if (data[0].password === password) {
          // console.log(data[0])
          req.session['admin_id'] = data[0].id
          console.log(req.session)
          res.send({status: 200, msg: '登录成功'})
        } else {
          // 密码不正确
          console.log('密码不对')
          res.send({status: 400, msg: '密码不正确'}).end()
        }
      }
    }
  })
})

module.exports = router
