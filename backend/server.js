const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const api = require('./api/api') 

const server = express()
const port = 3000

server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.get('/lastResult', (req, res) => {
    try{
        //axios.get(`https://www.euro-millions.com/pt/resultados/${req.params.lastDay}`)
        axios.get(`https://www.euro-millions.com/pt/resultados`)
            .then(response => {
                const lastResult = api.getLastResult(response.data)
                res.status(200).send(lastResult)
            })
            .catch(err =>  res.send(err))
    } catch (err) {
        console.log(err)
    }
})

server.get('/yearResults/:year', (req, res) => {
    try{
        axios.get(`https://www.euro-millions.com/pt/arquivo-de-resultados-${req.params.year}`)
            .then(response => {
                const results =  api.getMostNumbers(response.data)
                res.status(200).send(results)
            })
            .catch(error => console.log(error))
    } catch(err) {
        console.log(err)
    }
    
})

server.get('/yearsSelected', (req, res) => {
    try {
        axios.get('https://www.euro-millions.com/pt/resultados')
            .then(response => {
                const years = api.getYearsSelect(response.data)
                res.status(200).send(years)
            })
            .catch (error => console.log(error))
    } catch(err) {
        console.log(err)
    }
})

server.listen(port, console.log('Server listenning on Port: ' + port))