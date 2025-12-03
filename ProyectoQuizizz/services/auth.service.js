const Estudiante = require('../models/estudiante.js');
const Admin = require('../models/admin.js');
const jwt = require('jsonwebtoken');

async function register(nombre, password, email, rol) {
    try {

        let res;
        const datos = {
            email,
            nombre,
            password
        }
        if (rol === 'admin') {
            const flag = await Admin.findOne({ email: email });
            if (flag) {
                throw new Error('El correo electronico ya esta registrado');
            }
            const nuevoAdmin = await Admin.create(datos);
            res = nuevoAdmin.toObject();

        } else {
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

async function login(nombre, password, email, rol) { 

    try {
        let usuarioEncontrado;
        let rolEnToken;

        if (rol === 'admin') {
            usuarioEncontrado = await Admin.findOne({ email: email, nombre: nombre });
            rolEnToken = 'admin';
        } else {
            usuarioEncontrado = await Estudiante.findOne({ email: email, nombre: nombre });
            rolEnToken = 'estudiante';
        }

        if (!usuarioEncontrado) {
            throw new Error('Usuario no encontrado o correo incorrecto');
        }

        const esCorrecta = await usuarioEncontrado.compararPassword(password);
        
        if (!esCorrecta) {
            throw new Error('Contraseña incorrecta');
        }
        const payload = {
            id: usuarioEncontrado._id, 
            rol: rolEnToken
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        const infoUsuario = usuarioEncontrado.toObject();
        delete infoUsuario.password;

        return {
            token,
            usuario: infoUsuario
        };

    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    register,
    login
}
