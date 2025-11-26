const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    id_categoria: {
        type: String,
        required: true,
        unique: true
    },

    nombre_categoria: {
        type: String,
        reequired: true,
        trim: true,
        uppercase: true
    },

    descripcion_categoria: {
        type: String,
        trim: true,
        default: 'Sin descripcion'
    },
    sigla: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Categoria', CategoriaSchema);

