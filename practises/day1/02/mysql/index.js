(async () => {
  const mysql = require('mysql2/promise')

  const cfg = {
    host: 'localhost',
    user: 'root',
    passward: 'root',
    database: 'test',
    charset: 'utf-8'
  }
  const connection = await mysql.createConnection(cfg);
  let ret = await connection.execute()
})()