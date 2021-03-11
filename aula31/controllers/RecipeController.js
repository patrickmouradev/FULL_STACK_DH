const fs = require("fs");
const path = require("path");
const {Recipe} = require("../models/")

// 1ª forma que voces podem encontrar de exportar metodos do controller
module.exports = {
  async index(req, res, next){
    let {count: size, rows:recipes} = await Recipe.findAndCountAll({
      order: ['id'],
      limit: 10,
      offset: 0, });

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

      let recipe = await Recipe.findByPk(id)

      res.render('edit-recipe',{recipe, user: req.session.user})
  },


  async update(req, res, next){
    
    let id = req.params.id
    let {name,email,message} = req.body;

    let recipe = await Recipe.findByPk(id)
    
    recipe.update({
      name,
      email,
      message
    });

    res.render('edit-recipe', { recipe, updated: true });

},

  async delete(req, res, next){
    let id = req.params.id;
    let recipe = await Recipe.findByPk(id)
    recipe.destroy();


    res.redirect('/recipes');
  }
}
