const express = require('express');
const app = express;

app.get('/homepage', (req, res)=>{
    console.log('Fusca azul');
    res.send('EM DESENVOLVIMENTO');

})

app.get('/carros', (req, res)=>{

    console.log('Fusca azul');
    res.send('Sem garantia');


})

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});