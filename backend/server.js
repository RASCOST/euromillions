const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const server = express()
const port = 3000

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.get('/', (req, res) => {
    let result = null

    try{
        axios.get('https://www.euro-millions.com/pt/resultados/10-03-2020')
            .then(response => res.send(response.data))
            .catch(err =>  res.send(err))
    } catch (err) {
        console.log(err)
    }
})

server.listen(port, console.log('Server listenning on Port: ' + port))