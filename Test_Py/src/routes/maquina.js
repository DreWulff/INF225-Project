const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// listar máquinas
router.get('/', (req, res) =>{
    console.log("Entered!");
    mysqlConnection.query('SELECT * FROM Maquina', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//Agregar maquina
router.post('/', (req,res) => {
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
router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM Maquina WHERE id = ?', {id}, (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
           console.log(err);
        }
    });
});

module.exports = router;