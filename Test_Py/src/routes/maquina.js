const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

async function confirType(tipo_maquina) {
    return await fetch('http://3.235.42.11:3000/tipo_maquina/'+tipo_maquina)
        .then(response => {
            return response.status;
        })
        .catch(error => {
            return 404;
        });

};

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

//Buscar máquina
router.get('/maquina/:id', (req, res) =>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM Maquina WHERE id = ?', [id], (err,rows)=>{
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

//Agregar maquina
router.post('/maquina', (req,res) => {
    const { nombre, ubicacion, tipo_maquina }=req.body;
    confirType(tipo_maquina).then(type_status => {
        if(type_status == 200){
            mysqlConnection.query('INSERT INTO Maquina set ?', [req.body], (err,rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err);
                };
            });
        }else{
            const mess = {message:"Tipo de maquina no valido."};
            res.json(JSON.stringify(mess));
        }
    }).catch(e => console.log(e));
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