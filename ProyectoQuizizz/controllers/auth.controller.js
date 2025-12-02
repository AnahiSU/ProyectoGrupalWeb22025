const authService = require('../services/auth.service.js');

async function register(req,res){
    try{
        const {nombre, password, email,rol} = req.body;
        if(!nombre || !password || !rol || !email){
            return res.status(400).json({success:false, message:"Faltan datos obligatorios"});
        }
        const data = await authService.register(nombre, password, email, rol);
        res.status(200).json({success:true, message:"Registro exitoso",data});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}

modules.exports = {
    register,
}