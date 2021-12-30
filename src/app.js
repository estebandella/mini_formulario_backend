// //npm init -y
// //npm install express --save
// //npm install
// //npm install -g nodemon
// // npm install ejs
// //npm install multer
// // ****************************************************************

//EXPRESS: 
const express = require('express');//EXPRESS: Inicializamos la apllicacion EXPRESS
const app = express();

const logger = require('morgan');
const path = require('path');


// MIDDLEWARES
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public

//FORMULARIOS:
app.use(express.urlencoded({ extended: false })); //FORMULARIO: Para enviar info desde el formulario por REQ.BODY y usar "POST"
app.use(express.json()); //FORMULARIO: Para enviar info desde el formulario por REQ.BODY y usar "POST"
const methodOverride =  require('method-override'); //PUT, DELETE: Pasar poder usar los métodos PUT y DELETE
app.use(methodOverride('_method')); //PUT, DELETE: Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


app.use(logger('dev'));

//COOKIES
const cookieParser = require('cookie-parser');//COOKIES
app.use(cookieParser()); //para usar o leer las cookies que tengo guardadas


// TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


const mainRouter = require('./routes/main');

// recibe una ruta raiz, que se concatena con las rutas internas
app.use('/',mainRouter);


//3) Levantamos el SERVIDOR
app.listen(process.env.PORT || 3030,() => { 
    console.log('Servidor 3030 corriendo y escuchando bien')
});

