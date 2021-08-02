const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// listar hablilitaciones
router.get('/habilitacion', (req, res) =>{
    mysqlConnection.query('SELECT * FROM Habilitacion', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/habilitacion/:rut', (req, res) =>{
    const { rut } = req.params;
    console.log(rut);
    mysqlConnection.query('SELECT * FROM Habilitacion WHERE rut_maker = ?', [rut], (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/habilitacion/:tipo?param', (req, res) =>{
    const { tipo } = req.params;
    console.log(tipo);
    mysqlConnection.query('SELECT * FROM Habilitacion WHERE tipo_maquina = ?', [parseInt(tipo)], (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;