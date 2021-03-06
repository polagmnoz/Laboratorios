//guardar librería en una constante
const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars');

//crear app
var app = express();
//consolidate hace conexion con express y hbs
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');

//definir template, y carpeta donde estara el template
app.set('views', './views');

//definir hoja de estilos 1. carpeta virtual 2. carpeta real
app.use('/css', express.static('css'));

//configrar una ruta
app.get('/', function (req, res) {

    res.render('index', {
        titulo: 'Semana 12',
        dirImg: 'https://handlebarsjs.com/images/handlebars_logo.png',
        textOne: 'lorem',
        personas: [
            'sebastian',
            'sofia',
            'pepi'
        ],
        carros: [{
                nombre: 'MiniCouper',
                llantas: 4,
                cilindraje: 1.2,
            },
            {
                nombre: 'Aveo',
                llantas: 4,
                cilindraje: 1.1,
            },
            {
                nombre: 'Spark',
                llantas: 4,
                cilindraje: 1.6,
            }
        ]
    });
});

app.listen(7070, function () {
    console.log('done in port 7070');
});