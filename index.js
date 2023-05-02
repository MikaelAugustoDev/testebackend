const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const Post = require('./models/post');

// CONFIGURAÇÃO DO HANDLEBARS QUE SERVE PARA MOSTRAR HTML PELO BACKEND
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');


// CONFIGURAÇÃO DO BODYPARSER QUE SERVE PARA PEGAR DADOS DE INPUTS
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())



// ROTAS

app.get('/', (req, res) => {
    Post.findAll().then(function(users) {
        res.render('home', {users: users})
    })
})

app.get('/cad', (req, res) => {
    res.render('form')
})
// ROTA DO FORMULARIO DE HANDLEBARS QUE PEGA O NOME E O EMAIL CADASTRADO
app.post('/add', function(req,res){
    Post.create({
        nome: req.body.nome,
        email: req.body.email
    }).then(function() {
        res.redirect('/')
    }).catch(function(err) {
        res.send(`Aconteceu um erro em ${err}`)
    })
})

app.get('/deletar/:id', function(req, res) {
    Post.destroy({where: {'id': req.params.id}}).then(function() {
        res.send('Deletado com sucesso')
    }).catch(function(err) {
        res.send('erro ao deletar' + err)
    })
})

// PORTA RODANDO
app.listen(8081, () => {
    console.log('http://localhost:8081')
})