var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UsersController')

/*rota mae esta no app.js /ussers */

/*Metodo que chama a View de Formulario*/
router.get('/create', UserController.create);

/*Metodo que chama salva Formulario*/
router.post('/save', UserController.save);

/*Metodo que chama tela de Login*/
router.get('/login', UserController.login);

/*Metodo que autentica*/
router.post('/authenticate', UserController.authenticate);


module.exports = router;
