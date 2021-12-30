const path = require('path');
const {validationResult} = require('express-validator');

const mainController = {
    // Controlador para la ruta index
    index: (req, res) => {

        //ACA: TOMO LOS VALORES CARGADOS EN LOS CAMPOS DEL FORMULARIO
        const resultado = req.method === 'POST' ? req.body : null ;

        //ACA: TOMO LOS ERRORES DE LAS VALIDACIOENS
        const errorsResult = validationResult(req);
        const errores=errorsResult.errors;


        let logname='';
        let logcolor='';
        let logmail='' ;
        let logedad='' ;
         
        //ACA: Envio la info para cargar la info del login enviado
        if (resultado?.name) {
            logname = resultado?.name; //req.cookies.logname;
            logcolor = resultado?.color; //req.cookies.logcolor;
            logmail = resultado?.mail; //req.cookies.logmail;
            logedad = resultado?.edad; //req.cookies.logedad;
        } else {
            //ACA: Leo las cookies del usuiaro para usarla en otra vista
            logname = req.cookies.logname;
            logcolor = req.cookies.logcolor;
            logmail = req.cookies.logmail;
            logedad = req.cookies.logedad;
        };

        //ACA: QUIERO QUE SE GUARDE EL COLOR SELECCIONADO
        if (resultado?.recordarColor) {
            res.cookie('logname', req.body.name ,{maxAge: 1000*60*60 }); //Aca guardo en la cookie en el navegador 
            res.cookie('logcolor', req.body.color ,{maxAge: 1000*60*60 }); //Aca guardo en la cookie en el navegador 
            res.cookie('logmail', req.body.mail ,{maxAge: 1000*60*60 }); //Aca guardo en la cookie en el navegador 
            res.cookie('logedad', req.body.edad ,{maxAge: 1000*60*60 }); //Aca guardo en la cookie en el navegador        
        }       

        //ACA: QUIERO OLVIDAR LOS DATOS DEL LOGIN
        if (req.query.olvidar) {
            res.clearCookie('logname');
            res.clearCookie('logcolor');
            res.clearCookie('logmail');
            res.clearCookie('logedad');
    
            console.log('ESTOY BORRANDO EN INDEX')
         }

        
         console.log('ESTOY EN INDEX  ' + req.query.olvidar)
        res.render('index', { resultado, errores,logname,logcolor,logmail,logedad });
        
    },

    vista2: (req, res) => {

        //ACA: Leo las cookies del usuiaro para usarla en otra vista
        const logname = req.cookies.logname;
        const logcolor = req.cookies.logcolor;
        const logmail = req.cookies.logmail;
        const logedad = req.cookies.logedad;

        console.log('ESTOY EN VISTA 2')


        res.render('detail', { logname, logcolor, logmail, logedad  });
    },

    recarga: (req, res) => {

        //ACA: TOMO LOS VALORES CARGADOS EN LOS CAMPOS DEL FORMULARIO
        const resultado = req.method === 'POST' ? req.body : null;

        //ACA: TOMO LOS ERRORES DE LAS VALIDACIOENS
        const errorsResult = validationResult(req);
        const errores = errorsResult.errors;

        //ACA: Leo las cookies del usuiaro para usarla en otra vista
        const logname = req.cookies.logname;
        const logcolor = req.cookies.logcolor;
        const logmail = req.cookies.logmail;
        const logedad = req.cookies.logedad;

        console.log('ESTOY EN RECARGA')

        res.render('index', { resultado, errores, logname, logcolor, logmail, logedad });
    }
};

module.exports = mainController;