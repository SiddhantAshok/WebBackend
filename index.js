// import express from "express"
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.baseUrl);
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    console.log(req.baseUrl);
    res.send('Hello twitter');
})

app.get('/login', (req,res) => {
    res.send('<h1>Please login at twitter</h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})