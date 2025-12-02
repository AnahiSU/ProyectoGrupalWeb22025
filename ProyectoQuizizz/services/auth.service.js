const { Estudiante } = require( '../models/estudiante.js');
const { Admin } = require( '../models/admin.js');

export async function register(nombre, password, email, rol){
    try{
        
        let res;
        const datos = {
            email,
            nombre,
            password
        }
        if(rol === 'admin'){
            const flag = await Admin.findOne({ email: email });
            if (flag) {
                throw new Error('El correo electronico ya esta registrado');
            }
            const nuevoAdmin = await Admin.create(datos);
            res = nuevoAdmin.toObject();
        }else{
            const flag = await Estudiante.findOne({ email: email });
            if (flag) {
                throw new Error('El correo electronico ya esta registrado');
            }
            const nuevoEstudiante = await Estudiante.create(datos);
            res = nuevoEstudiante.toObject();
        }
        delete res.password;
        return res;
    } catch (err) {
        throw new Error('Error al registrar: ' + err.message);
    }
}
