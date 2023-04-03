import express  from "express";

const PORT = 3333

const app = express()

app.get('/index', (req,res) => {
    res.send(' i am index')
})

app.get('/hello', (req,res) => {
    res.send("hello there")
})

app.get('/jonathan', (req,res) => {
    res.send( "we heart jonathan")
})

app.listen (PORT, () => {
    console.log( `listening on http://localhost:${PORT}`)
})