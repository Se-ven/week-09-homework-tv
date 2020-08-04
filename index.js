// In our index we have to first require the relevant data
const shows = require('./showdata')
// then we import express as the server framework
const express = require('express')
const app = express()

// configure user request 
app.get('/user', (req, res) => {
  const user = {}

  res.send(user)
})

// then we pull basic styling/static stuff
app.use(express.static('./public/css'))
// then we set the templating stuff with pug
app.set('view engine', 'pug')
// here's where we get our navigation pages and responses
app.get('/', (req, res) => {
  return res.render('season', { shows })
})

app.get('/season', (req, res) => {
  return res.render('season', { season })
})

app.all('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(3034, () => {
  // eslint-disable-next-line no-console
  console.log('Opened port 3034...')
})
