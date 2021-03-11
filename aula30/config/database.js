const config = {
  /*Sem Utilizar Varivel de Ambiente*/
    username: 'root',
    password: '140908',
    database:'dh_fs_node12',
    host: 'localhost',

    /*Utilizando Varivel de Ambiente*/
    // username: process.env.DATABASE_USER,
    // password: process.env.DATABASE_PASSWORD,
    // database: process.env.DATABASE,
    // host: process.env.DATABASE_HOST,

    dialect: 'mysql'
  }

  console.log(config)
  
  module.exports = config;
  