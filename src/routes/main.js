const express = require('express');
const router = express.Router(); 
const mainController = require('../controllers/main');

//Agrego ERRORES a la request
const { body } = require('express-validator');
const validations = [
    body('name').notEmpty().withMessage('Debe ingresar el nombre'),
    body('mail').notEmpty().withMessage('Debe ingresar el email'),
    body('color').notEmpty().withMessage('Debe seleccionar el color'),
    body('edad').notEmpty().withMessage('Debe ingresar la edad'),
    body('edad').isNumeric().withMessage('Para su edad debe ingresar un numero'),
];

router.get('/', validations, mainController.index);
router.post('/',validations, mainController.index);
router.get('/detail',mainController.vista2);

module.exports = router;
