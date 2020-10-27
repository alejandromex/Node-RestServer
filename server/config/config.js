const { isRegExp } = require("underscore");

// Configuracion del puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Base de datos

if(process.env.NODE_ENV == 'dev')
{
    urlDB = "mongodb://localhost:27017/cafe";
}
else{
    urlDB =  "mongodb+srv://Alejandromex:Pedro123@cluster0.roire.mongodb.net/cafe";
}

process.env.URLDB = urlDB;


//mongodb+srv://Alejandromex:Pedro123@cluster0.roire.mongodb.net/test

//mongodb+srv://Alejandromex:pedro123@cluster0.roire.mongodb.net/test?authSource=admin&replicaSet=atlas-bwjfzs-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true