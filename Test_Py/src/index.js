const express = require('express');
const app = express();

//Configuración
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use('/api/maquina', require('./routes/maquina'));
app.use('/api/recurso', require('./routes/recurso'));
app.use('/api/habilitacion', require('./routes/habilitacion'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});