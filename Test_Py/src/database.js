const mysql= require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'ls-d5670fe4035a3ae53a49e768d116bb03973137df.cebfn6mhhqhb.us-east-1.rds.amazonaws.com',
    user: 'dbmasteruser',
    password: '2inf2$dB5',
    database: 'inf-225-project'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;