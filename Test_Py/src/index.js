const express = require('express');
const app = express();

//Configuración
app.set('port', process.env.PORT || 80);

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use(require('./routes/maquina'));
app.use(require('./routes/recurso'));
app.use(require('./routes/habilitacion'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});