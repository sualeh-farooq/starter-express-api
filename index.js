const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Uploaded on cyclic server , Root")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
