require('./config/config');
const express = require('express')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();



//Middlewares
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
 

//Rutas
app.use(require('./routes/index'));


//Conexion a base de datos
 mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err)=>{
    if(err)
    {
        console.log("Error");
    }
    else{
        console.log("Conexion a la base de datos correcta");
    }
});


 
app.listen(process.env.PORT,()=>{
    console.log(`Conexion establecida en el puerto 3000`);
})