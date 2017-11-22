const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const user = process.env.USER
const password = process.env.PASSWORD
console.log(password);
//connection to database
mongoose.connect(`mongodb://wisnu:123@ds159845.mlab.com:59845/mydb_hacktiv8`)
mongoose.Promise = global.Promise
mongoose.connection.once('open', function(){
  console.log('Connection has been made');
}).on('error', (error) => {
  console.log("connection error: ==================", error.message);
})


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))
app.use(cors())




app.get('/', function(req, res){
  res.send('hello world');
});

const api = require('./routes/api')
app.use('/api', api )

app.listen(process.env.PORT||"3000");
