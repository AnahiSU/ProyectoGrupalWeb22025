const { Estudiante } = require( '../models/estudiante.js');
const { Admin } = require( '../models/admin.js');
const jwt = require('jsonwebtoken');

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

export async function login(nombre, password, email, rol) {

    try {
        if (rol === 'admin') {
            const estudiante = await Estudiante.findOne({
                nombre: nombre,
                email: email
            });
            const payload = {
                id: estudiante._id,
                rol: 'estudiante' 
            };
            if(estudiante.compararPassword(password)){
                const token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' } 
                );
                const infoEstudiante = estudiante.toObject();
                delete infoEstudiante.password;
    
                return {
                    token, 
                    usuario: infoEstudiante
                };
            }
        } else {
            const admin = await Admin.findOne({
                nombre: nombre,
                email: email
            });
            const payload = {
                id: admin._id,
                rol: 'admin' 
            };
            if(admin.compararPassword(password)){
                const token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' } 
                );
                const infoAdmin = admin.toObject();
                delete infoAdmin.password;
    
                return {
                    token, 
                    usuario: infoAdmin
                };
            }
        }
    } catch (err) {
        throw new Error('Error al logear: ' + err.message);
    }
}

