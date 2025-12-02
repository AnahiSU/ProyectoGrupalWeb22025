import { Estudiante } from '../models/estudiante.js';
import { Admin } from '../models/admin.js';
async function register(nombre, password, email, rol){
    try{
        const flag = await Estudiante.findOne({ email: email });
        if (flag) {
            throw new Error('El correo electronico ya esta registrado');
        }
        let res;
        const datos = {
            email,
            nombre,
            password
        }
        if(rol === 'admin'){
            const nuevoAdmin = await Admin.create(datos);
            res = nuevoAdmin.toObject();
        }else{
            const nuevoEstudiante = await Estudiante.create(datos);
            res = nuevoEstudiante.toObject();
        }
        delete res.password;
        return res;
    }catch(err){
        throw new Error('Error al registrar: '+ err.message);
    }
}

modules.exports = {
    register,
}