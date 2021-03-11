const config = {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql' 
  }

  console.log(config)
  module.exports = config;
  