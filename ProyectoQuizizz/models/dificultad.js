const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NivelDificultadSchema = new Schema({
  nombre: { 
    type: String, 
    required: true,
    trim: true 
  },
  descripcion: { 
    type: String, 
    default: '' 
  },
  rangoEdad: { 
    type: Schema.Types.ObjectId, 
    ref: 'RangoEdad',
    required: true 
  }
}, { timestamps: true });

const NivelDificultad = mongoose.model('NivelDificultad', NivelDificultadSchema);

module.exports = { NivelDificultad };