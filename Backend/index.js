const express = require('express')
const app = express()

app.get('/',(req,res)=>{
res.send("Welcome Thapar Sports");
});

app.listen(3001,() => {
    console.log("Running on Port 3001");
});
