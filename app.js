const express = require('express')
const app = express()
const port = 8000
const dotenv = require('dotenv');
dotenv.config();


const routes = require('./src/routes/users');
app.use('/api', routes)

app.listen( port, () => {
  console.log(`Example wwwapp listening qweqweon port ${port}`)
})