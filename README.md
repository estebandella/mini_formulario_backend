# mini-formulario-express-validator-cookies-middlewares

## Descripción del Proyecto: 

Pequeño formulario de login, con express validator empleando cookies y middlewares 

## Contacto: 

Autor: Esteban Della Nave

Linkedin: https://www.linkedin.com/in/estebandellanave/

Email: Estebandellanave@gmail.com 

## Resumen: 

Es un formulario donde un usuario ingresa algunos datos y puede elegir que los datos sean recordados o borrar todos los datos ingresados, para lo cual se utilizó Express Validator, cookies y Session. 

## Objetivos:

Objetivo 1: Crear un formulario con Express que contenga, nombre, un menú desplegable para seleccionar colores, email, edad, y un boton enviar. 

Tras ingresar los datos y al dar clic en el botón de enviar se redirecciona a la misma página y que se muestre un texto que diga: “ Hola nombreUsuario , elegiste el color: colorSelecionado , tu email es: emailUsuario y tu edad es: edadUsuario”. 

Objetivo 2: Con Express Validator, se valida, Los campos que son requeridos y, en caso de que no se ingresen, se muestra un mensaje de error indicando que deben completarse. En caso de que se ingrese la edad, debemos validar que sea un número, en caso, contrario, mostrar el error. 

Objetivo 3: Al seleccionar el boton Enviar se debe cambiar el color del body y se carga los campos en el formulario y se habilita el link para ir a la pagina 2 “vista 2” done mediante la cookie se mantiene la selección del usuario, con un texto y indicando el color del fondo de la vista. 

Objetivo 4: Se agrega un checkox que diga Recordar Login para que persistan los datos del usuario logeado si se cierra y se abre el navegador. 

También se implementa un boton para olvidar los datos ingresados, lo cual vuelve todo a su estado inicial. 
