require('./config/config');
const express = require('express')
const app = express();
const bodyparser = require('body-parser');

//Middlewares
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
 
app.get('/usuario', function (req, res) {
  res.send('get Usuario')
});


app.post('/usuario',(req,res)=>{
    
    let body = req.body;
    
    let nombre = req.body.nombre;
    let edad = req.body.edad;

    if(body.nombre == undefined || body.edad == undefined)
    {
        res.status(400).json({
            ok: false,
            message: "The name and age is required"
        });
    }
    else
    {
        res.send({
            nombre,
            edad,
        });
    }

});

app.put("/usuario/:id",(req,res)=>{
    let id = req.params.id;
    res.send({
        id,
        message: "Funcion put para actualizar usuario",
        code: 200
    });
})
 
app.listen(process.env.PORT,()=>{
    console.log(`Conexion establecida en el puerto 3000`);
})