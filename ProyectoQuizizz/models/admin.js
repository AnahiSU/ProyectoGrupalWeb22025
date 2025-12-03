const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true 
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
    }
}, {
    timestamps: true
});


AdminSchema.pre('save', async function() {
    if (!this.isModified('password')) return; 

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt); 
    } catch (error) {
        throw new Error('Error al encriptar contraseña admin');
    }
});

AdminSchema.methods.compararPassword = async function(passwordIngresado) {
    return await bcrypt.compare(passwordIngresado, this.password); // Usar password
};

module.exports = mongoose.model('Admin', AdminSchema);