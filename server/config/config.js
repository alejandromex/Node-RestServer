const { isRegExp } = require("underscore");

// Configuracion del puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del token

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// SEED de autenticacion

process.env.SEED_TOKEN = process.env.CLAVE || "este-es-mi-clave-secreta";


// Base de datos

if(process.env.NODE_ENV == 'dev')
{
    urlDB = "mongodb://localhost:27017/cafe";
}
else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//mongodb+srv://Alejandromex:Pedro123@cluster0.roire.mongodb.net/test

//mongodb+srv://Alejandromex:pedro123@cluster0.roire.mongodb.net/test?authSource=admin&replicaSet=atlas-bwjfzs-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true