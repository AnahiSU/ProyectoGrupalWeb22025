const mongoose = require('mongoose');

const SubCategoriaSchema = new mongoose.Schema({
    id_subcategoria: {
        type: String,
        required: true,
        unique: true
    },

    nombre_subcategoria: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },

    descripcion_subcategoria: {
        type: String,
        trim: true,
        default: 'Sin descripcion'
    },

    sigla: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },

    id_categoria: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Categoria'

    },
}, {
    timestamps: true
}
)

module.exports = mongoose.model('SubCategoria', SubCategoriaSchema);
