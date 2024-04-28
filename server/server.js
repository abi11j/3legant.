const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send('This is node.js with express');
})

app.listen('4000', ()=>{
    console.log('http://localhost:4000');
})