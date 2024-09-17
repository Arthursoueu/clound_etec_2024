//vou instalar o express - 
//GErenciador de pacotes - NPM

const express = require('express')
const server = express()
//importar
const path = require('path')

server.use(express.static('public'))

server.use(express.json())//possibilidade de json

server.get("/cadastro", (req,res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

server.get('/pets', (req,res)=> {
    res.send({
        name: "Meu gato",
        idade: "4 anos",
        peso: "300kg"
    })
})

 server.listen(3000, () => {
    console.log("servidor no ar...");
 });