var express = require('express');
var router = express.Router();

const RecipeController = require ("../controllers/RecipeController")

/* GET home page. */
router.get('/', RecipeController.index);

/*POST SALVAR RECEITAS*/
router.post('/save', RecipeController.save);

/*GET SALVAR RECEITAS*/
router.get('/delete/:id', RecipeController.delete);

/*GET Editar RECEITAS*/
router.get('/edit/:id', RecipeController.edit);

/*POST Editar RECEITAS*/
router.post('/update/:id', RecipeController.update);

module.exports = router;
