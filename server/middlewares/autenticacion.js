const jwt = require('jsonwebtoken');
const usuario = require('../models/usuario');


//  Verificacion del token
let verificaToken = (req,res, next) =>{
    let token = req.get('token');

    jwt.verify(token,process.env.SEED_TOKEN,(err,decoded)=>{
        if(err)
        {
            return res.status(400).json({
                ok:false,
                err
            })
        }

        req.usuario = decoded.usuario;
        next();
    });

}

let verificaAdmin_Role = (req,res,next) => {
    let usuario = req.usuario;

    if(usuario.role == "ADMIN_ROLE")
    {
        next();
    }
    else{
        return res.status(400).json({
            ok:false,
            err: {
                message: "El usuario no es administrador"
            }
        })

    }
}


module.exports = {
    verificaToken,
    verificaAdmin_Role
}