const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const mysqlConnection = require('../database');

async function confirMaker(rut_maker) {
    let response = await fetch('http://ec2-3-13-79-51.us-east-2.compute.amazonaws.com:8081/student/rut?rut=${rut_maker}');
    let users = await response.json();
    if (users == 404) {
        return (false);
    }
    else {
        return (true);
    }
};

async function confirAssist(rut_assist) {
    let response = await fetch('http://ec2-3-13-79-51.us-east-2.compute.amazonaws.com:8081/assistant/rut?rut=${rut_assist}');
    let users = await response.json();
    let status = await response.status;
    console.log(status);
    if (status == 404) {
        return (false);
    }
    else {
        return (true);
    }
};

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

//router.post('/habilitacion', (req,res) => {
//    const { rut_maker, rut_ayudante, tipo_maquina, habilitado }=req.body;
//    mysqlConnection.query('INSERT INTO Habilitacion set ?', [req.body], (err,rows)=>{
//        if(!err){
//            res.json(rows);
//        }else{
//            console.log(err);
//        };
//    });
//});

router.post('/habilitacion', (req,res) => {
    const { rut_maker, rut_ayudante, tipo_maquina, habilitado }=req.body;
    console.log(confirAssist(rut_ayudante));
    if(confirMaker(rut_maker) && confirAssist(rut_ayudante)) {
        mysqlConnection.query('INSERT INTO Habilitacion set ?', [req.body], (err,rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            };
        });
    }else{
        res.json(!confirMaker*'Rut invalido.' + !confirAssist*'Rut ayudante invalido.');
    }
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