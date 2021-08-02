const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// listar hablilitaciones
router.get('/', (req, res) =>{
    mysqlConnection.query('SELECT * FROM Habilitacion', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:rut', (req, res) =>{
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

router.get('/:tipo/:param', (req, res) =>{
    const { tipo } = req.params;
    console.log(tipo);
    mysqlConnection.query('SELECT * FROM Habilitacion WHERE tipo_maquina = ?', [tipo], (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req,res) => {
    const { rut_maker, rut_ayudante, tipo_maquina, habilitado }=req.body;
    mysqlConnection.query('INSERT INTO Habilitacion set ?', [req.body], (err,rows)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        };
    });
});

module.exports = router;