const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// listar máquinas
router.get('/maquina', (req, res) =>{
    mysqlConnection.query('SELECT * FROM Maquina', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//Agregar maquina
router.post('/maquina', (req,res) => {
    const { nombre, ubicacion, tipo_maquina }=req.body;
    mysqlConnection.query('INSERT INTO Maquina set ?', [req.body], (err,rows)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        };
    });
});

//eliminar maquina {id}
router.delete('/maquina/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM Maquina WHERE id = ?', [id], (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
           console.log(err);
        }
    });
});

module.exports = router;