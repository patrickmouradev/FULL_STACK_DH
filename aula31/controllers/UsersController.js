const { User, Recipe } = require('../models')
const bcrypt = require('bcrypt');



module.exports = {
    create(req, res, next) {
        res.render('create-user');
    },

    async save(req, res, next) {
        /*Cripitografando Senha*/
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

        /*Pegando as Informações e Transformando em Array*/
        let user = { ...req.body };

        /*Salvando no Banco de Dados */
        await User.create(user);

        res.render('create-user', { added: true });
    },

    login(req, res, next) {

        res.render('login')

    },
    async authenticate(req, res, next) {
        let { email, password } = req.body;

        let user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.render('login', { notFound: true })
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.render('login', { notFound: true })
        }

        //desestruturando o objeto para tirar o passwor
        let { password: pass, ...userSemPassword } = user.toJSON();
        console.log(userSemPassword);

        req.session.user = userSemPassword;

        res.render('recipes', { user: req.session.user, recipes: await Recipe.findAll() })



    },
    logout(req, res, next) {
        req.session.destroy();
        res.redirect('/')

    }

}