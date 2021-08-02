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
    mysqlConnection.query('SELECT * FROM Habilitacion WHERE rut_maker = ?', [rut], (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/habilitacion/:tipo/:param', (req, res) =>{
    const { tipo } = req.params;
    mysqlConnection.query('SELECT * FROM Habilitacion WHERE tipo_maquina = ?', [tipo], (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/habilitacion', (req,res) => {
    const { rut_maker, rut_ayudante, tipo_maquina, habilitado }=req.body;
    mysqlConnection.query('INSERT INTO Habilitacion set ?', [req.body], (err,rows)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        };
    });
});

router.put('/habilitacion/:id',(req,res) =>{
    const {id} = req.params;
    mysqlConnection.query('UPDATE Habilitacion SET ? WHERE id = ?', [req.body,id], (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;