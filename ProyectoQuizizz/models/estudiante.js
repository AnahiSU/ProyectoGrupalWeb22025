const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const EstudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: { 
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true
    },
    password: { 
        type: String,
        required: true
    },
    puntajeTotal: { 
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

EstudianteSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

EstudianteSchema.methods.compararPassword = async function(passwordIngresado) {
    return await bcrypt.compare(passwordIngresado, this.password);
};

module.exports = mongoose.model('Estudiante', EstudianteSchema);