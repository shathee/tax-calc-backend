// const {Pool} = require("pg");

// console.log('qq>>>',process.env.DB_HOST)
// console.log('ewe>>>weqweqwe',process.env.DB_USER)

// const dbPool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,

// })

// module.exports = {
//     dbPool
// }


const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
)

module.exports = sequelize;