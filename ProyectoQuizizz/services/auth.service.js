import { User } from '../models/user.model.js';
async function register(nombre, password, rol){
    try{
        const user = new User({nombre, password, rol});
        return await user.save();
    }catch(err){
        throw new Error('Error al registrar: '+ err.message);
    }
}

modules.exports = {
    register,
}