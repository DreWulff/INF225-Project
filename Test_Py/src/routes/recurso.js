const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Lista recursos
router.get('/recurso', (req,res) =>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM Recurso',  (err,rows,fields) => {
        if(!err){
            res.json(rows);
            console.log(id);
        }else{
            console.log(err);
        }
    });
});

//Eliminar recurso id
router.delete('/recurso/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM Recurso WHERE ID = ?', [id], (err,rows,fields)=>{
        if(!err){
            res.json("Eliminado");
        }
        else{
           console.log(err);
        }
    });
});

module.exports = router;