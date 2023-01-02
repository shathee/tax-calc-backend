const express = require('express')
const app = express()
const port = 8000
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const routes = require('./src/routes/users');


app.use('/api', routes)

app.listen( port, () => {
  console.log(`Example wwwapp listening qweqweon port ${port}`)
})