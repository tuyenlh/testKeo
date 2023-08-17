const express = require('express')
require('dotenv').config();
const configViewEnging=require('./config/viewEngine')
const webRouter=require('./routes/web')
const mysql =require('mysql2');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

const app = express()
const port = process.env.PORTS || 8888;
const hostname =process.env.HOST_NAMES|| 'localhost';


configViewEnging(app);
app.use('/',webRouter)

//tesst connection
const connection =mysql.createConnection({
  host:'localhost',
  port:3307,
  user:'root',
  password:'123456',
  database:'hoidanit'
})
connection.query(
  'select * from Users u',
  function(err,resultd,fields){
    console.log(">>>>>>resulst",resultd);
    console.log(">>>>> fields",fields);
  }
)

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})