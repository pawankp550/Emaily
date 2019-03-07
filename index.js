const express = require('express');
const app = express();

app.get('/greeting', (req,res) => {
    res.send({
        "Name" : "pawan"
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);   