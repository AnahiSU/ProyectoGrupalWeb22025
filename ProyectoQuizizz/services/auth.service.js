import { Estudiante } from '../models/estudiante.js';
import { Admin } from '../models/admin.js';
async function register(nombre, password, rol){
    try{
        const flag = await Estudiante.findOne({ email: datosEstudiante.email });
        if (flag) {
            throw new Error('El correo electronico ya esta registrado');
        }
        let respuesta;
        if(rol === 'admin'){
            const nuevoAdmin = await Admin.create(datosEstudiante);
            respuesta = nuevoAdmin.toObject();
        }else{
            const nuevoEstudiante = await Estudiante.create(datosEstudiante);
            respuesta = nuevoEstudiante.toObject();
        }
        delete respuesta.password;
        return respuesta;
    }catch(err){
        throw new Error('Error al registrar: '+ err.message);
    }
}

modules.exports = {
    register,
}