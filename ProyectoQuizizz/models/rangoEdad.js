const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RangoEdadSchema = new Schema({
  edadMin: { 
    type: Number, 
    required: true 
  },
  edadMax: { 
    type: Number, 
    required: true 
  }
}, { timestamps: true }); 

const RangoEdad = mongoose.model('RangoEdad', RangoEdadSchema);

module.exports = { RangoEdad };