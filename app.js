const express = require('express')
const hbs = require('hbs');

require('dotenv').config();

const port = process.env.PORT

const app = express()

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

// portafolio
app.get('/Portafolio', (req, res) => {
    res.render('Portafolio')
})

app.get('/Proyecto1', (req, res) => {
    res.render('Proyecto1')
})
app.get('/Proyecto2', (req, res) => {
    res.render('Proyecto2')
})
app.get('/Proyecto3', (req, res) => {
    res.render('Proyecto3')
})

app.get('/Proyecto4', (req, res) => {
    res.render('Proyecto4')
})

app.get('/Proyecto5', (req, res) => {
    res.render('Proyecto5')
})

app.get('/Proyecto6', (req, res) => {
    res.render('Proyecto6')
})
app.get('/SobreMi', (req, res) => {
    res.render('SobreMi')
})

app.get('*', (req, res) => {
    res.render('error')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})


