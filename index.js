const express = require('express')
const app = express()
app.use(express.json())
const connect = require("./bd/bd mysql")
app.listen(3000, () => { 
console.log("serveur a l'ecoute")

})
app.get('/client',(req, res, next) => {
    res.json("liste des client")
})
app.get('api/client', (req, res, next) => {
    res.status(200).json(client)
})
app.get('api/client/:id', (req, res, next) => {
    const id = parseInt(req.params.id)

    const client = client.find(client => client.id ===id)
    res.status(200).json(client)
    res.json
    next()


})

