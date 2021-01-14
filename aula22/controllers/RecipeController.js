const fs = require("fs")
const path = require("path")

const recipes = require("../data/recipe")

module.exports = {
    index (req, res, next) {
        res.render('recipes', {recipes : recipes});
      },

      save(req,res,next){

          let id = recipes.length + 1;
          
          let recipe = {id, ...req.body};
          
          recipes.push(recipe);
          
          let dataString = JSON.stringify(recipes);
          
          let filePath = path.join('data','recipe.js');
          
          fs.writeFileSync(filePath,'module.exports = ');
          fs.appendFileSync(filePath,dataString)
          
          res.redirect('/recipes')

      }


}