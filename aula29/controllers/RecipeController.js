const fs = require("fs");
const path = require("path");
const saveData = require("../utils/saveData")
const {Recipe} = require("../models/")

const recipes = require("../data/recipe");

// 1ª forma que voces podem encontrar de exportar metodos do controller
module.exports = {
  index(req, res, next){
    res.render('recipes', { recipes: recipes, user: req.session.user });
  },

  async save(req, res, next){
   
    /* montando objeto para seguir padrao dentro do arquivo data/recipe.js */
    let recipe = { ...req.body };
    await Recipe.create(recipe)

    res.redirect('/recipes');
  },

  async edit(req, res, next){
      let id = req.params.id

      //Obter Receita para alterar

      let recipe = recipes.find(recipe=> recipe.id == id)

      res.render('edit-recipe',{recipe, user: req.session.user})
  },


  async update(req, res, next){
    
    let id = req.params.id
    let {nome,email,mensagem} = req.body;

    let recipe = recipes.find(recipe=> recipe.id == id)
    
    recipe.nome = nome;
    recipe.email = email;
    recipe.mensagem = mensagem;


    saveData(recipes,'recipes.js');

    res.render('edit-recipe',{ recipe, update : true, user: req.session.user})

},

  async delete(req, res, next){
    let id = req.params.id;
    let recipeIndex = recipes.findIndex(recipe => recipe.id == id);
    recipes.splice(recipeIndex, 1);


    saveData(recipes,'recipes.js');

    res.render('recipes', { recipes, deleted: true });
  }
}
