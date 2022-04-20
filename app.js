//usando objeto express
const express = require('express')

//app de Express
const app = express()

//indicamos que usaremos json (para un api)
app.use(express.json())

//puerto en que vamos a ver nuestra app
const port = 3000

//http methods
app.get('/v1/explorers', (req, res) => { //al entrar a esta ruta, en la terminal se despliega un mensaje donde se dice que se consulto el api
    console.log(`Api explorers GET ALL request ${new Date()}`);
    const explorer1 = {id: 1, name: "Abraham"}
    const explorer2 = {id: 2, name: "Ariel"}
    const explorer3 = {id: 3, name: "Heichi"}
    const explorer4 = {id: 4, name: "Horacio"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// Con esto inicializamos esta app (esto debe estar a lo ultimo?)
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})