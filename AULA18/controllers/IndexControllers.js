const IndexController = {
    showSobre: (req,res) => {
        res.render('sobre');
    },
    showIndex : (req,rex)=> {
        res.render('index', { title: 'Express' });
    }
}

module.exports = IndexController;