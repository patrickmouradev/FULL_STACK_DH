const express = require('express');
const app = express()


app.get('/', (req, res) => {

    res.send('Vc tá na home Page')
})

//Criando rota com parametrização
app.get('/cumprimentar/:nome', (req, res) => {
    res.send('Olá ' + req.params.nome)
})

//Criando Rota Parametrizada com parametro opcional
app.get('/calcular/:numero1/:numero2?', (req, res) => {
    let { numero1, numero2 } = req.params
    typeof numero2 !== "undefined" ? res.send('A Some é ' + (parseInt(numero1) + parseInt(numero2))) : res.send('O Primeiro Parametro ' + parseInt(numero1))

})


app.listen(3000, () => {
    console.log('Server na Porta 3000')
})
