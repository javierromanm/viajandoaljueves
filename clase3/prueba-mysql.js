const mysql = require('mysql2')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'viajandoaljueves'
  });

  connection.connect(() => {
      console.log('conectado !!!')
      //let strSQL = 'INSERT jugar values ("hola mundo")';
      let strSQL = 'SELECT * from jugar'
      connection.query(strSQL, (err, result, fields)=>{
          console.log(err)
          console.log(result)
      })
      connection.end()
  })

  

