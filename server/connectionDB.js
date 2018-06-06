const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123456',
  database: 'personalSite'
})

module.exports = db
