const bcrypt = require('bcrypt');
const users = require('../data/user');
const saveData = require('../utils/saveData');
const recipes = require('../data/recipe')

module.exports = {
    create(req, res, next){
        res.render('create-user');
    },
    
    save(req, res, next){
        let id = users.length +1;
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        let user = {id, ...req.body};
        console.log(user);
        users.push(user);
        saveData(users,'user.js');
        res.render('create-user',{  added: true });
    },
    
    login(req,res,next){

        res.render('login')

    },
    authenticate(req,res,next){
        let {email, password} = req.body;
        let user = users.find(user => user.email == email);
    
        if(!user){
           return res.render('login',{ notFound: true })
        }
        if(!bcrypt.compareSync(password,user.password)){
            return res.render('login',{ notFound: true })
        }

        //desestruturando o objeto para tirar o passwort
        let{password: pass, ...userSemPassword} = user;

        req.session.user = userSemPassword;
        
        res.render('recipes',{user : req.session.user, recipes:recipes})
     
        

    },
    logout(req,res,next){
        req.session.destroy();
        res.redirect('/')

    }

}