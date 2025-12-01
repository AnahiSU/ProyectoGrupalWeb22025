const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Librería para encriptar

const AdminSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true 
    },
    contrasena: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
AdminSchema.pre('save', async function(next) {
    if (!this.isModified('contrasena')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.contrasena = await bcrypt.hash(this.contrasena, salt);
        next();
    } catch (error) {
        next(error);
    }
});

AdminSchema.methods.compararPassword = async function(passwordIngresado) {
    return await bcrypt.compare(passwordIngresado, this.contrasena);
};

module.exports = mongoose.model('Admin', AdminSchema);