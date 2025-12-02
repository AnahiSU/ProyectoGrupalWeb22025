import authService from '../services/auth.service.js';

async function register(req,res){
    try{
        const {nombre, password, rol} = req.body;
        const data = await authService.register(nombre, password, rol);
        res.status(200).json({success:true, message:"Registro exitoso",data});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}

modules.exports = {
    register,
}