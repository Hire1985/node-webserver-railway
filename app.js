const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const port = process.env.PORT;


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {})


app.use(express.static('public'))

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Andres',
        titulo:'Curso de Node'
    })
})

app.get('/generic', function (req, res){
    res.render('generic', {
        nombre: 'Andres',
        titulo:'Curso de Node'
    })
})
app.get('/elements', function (req, res){
    res.render('elements', {
        nombre: 'Andres',
        titulo:'Curso de Node'
    })
})
app.get('*', function (req, res){
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Mi app esta corriendo en el puerto ${port}`)
})