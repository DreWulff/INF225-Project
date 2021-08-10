const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/tipo_maquina', (req, res) =>{
    mysqlConnection.query('SELECT * FROM Tipo_Maquina', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//Buscar tipo máquina
router.get('/tipo_maquina/:id', (req, res) =>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM Tipo_Maquina WHERE id = ?', [id], (err,rows,fields)=>{
        if(!err){
            if (rows.length==1){
                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
        }else{
            console.log(err);
        }
    });
});

module.exports = router;