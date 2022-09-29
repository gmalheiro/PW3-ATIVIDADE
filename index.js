/* IMPORTAÇÃO DO PACOTE EXPRESS: */
const express = require('express');
// console.log('TESTE DO GITHUBDESKTOPO');
/* IMPORTAÇÃO DA CONTROLLER DE CATEGORIA DE LIVROS */
const categoriaController = require('./controller/CategoriaController');

/* CRIAÇÃO DE UMA INSTANCIA EXECUTAVEL DO EXPRESS */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* ROTAS DE CATEGORIA DE LIVROS: */
// console.log('A REQUISIÇÃO PASSOU PELA INDEX');
app.use('/', categoriaController);

/* app.get('/homepage', (req, res)=>{
    console.log('Fusca azul');
    res.send('EM DESENVOLVIMENTO');

})

app.get('/carros', (req, res)=>{

    console.log('Fusca azul');
    res.send('Sem garantia');


})
 */
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});