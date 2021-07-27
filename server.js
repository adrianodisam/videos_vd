const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const rotaCategoria = require('./routes/categoria')
const rotaVideo = require('./routes/video')
const rotaTags = require('./routes/tag')
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// declaração para receber dados somente  em formato de json
app.use(bodyParser.json());
app.use((req, res, next) => {
    // permissão de acesso a api "*" todos
    res.header('Acess-Control-Allow-Origin', '*')
        // permissão o que pode colocar ao Header 
    res.header('Acess-Control-Allow-Header',
        'origin,x-Requrested-With,Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        // tipos de metodos aceitos
        res.header('Access-Control-Allow-Methos', 'PUT,POST, PATCH, DELETE, GET');
        return res.status(200).send({})
    }
    next();
});

app.use('/categoria', rotaCategoria);
app.use('/video', rotaVideo);
app.use('/tag', rotaTags);
// quando a rota passada não existe
app.use((req, res, next) => {
    const erro = new Error('erro não encontrado');
    erro.status = 404;
    next(erro);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        mensagem: error.message
    });
})

app.listen(PORT, () => {
    console.log("servidor rodando")
})

module.exports = app;