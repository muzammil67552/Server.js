const express = require ("express");
const cors = require ("cors");
require("dotenv").config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.listen (PORT, (req, res) =>{
    console.log(`Server is Listen ${PORT}`);
    
})