const express = require('express');
const cors = require('cors');
const app =express();
const port = process.env.PORT || 5000;


// middeleware

app.use(cors());
app.use(express.json());





app.get('/', (req, res) =>{
    res.send("textile arts server is running")
})

app.listen(port, ()=>{
    console.log(`texttile arts is running on port ${port}`)
})