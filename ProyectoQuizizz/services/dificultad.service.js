const { NivelDificultad } = require('../models/dificultad'); 

const createDificultad = async (data) => {
  return await NivelDificultad.create(data);
};

const getDificultades = async () => {
  // .populate('ageRange') rellena los datos del ID con el objeto completo del rango
  return await NivelDificultad.find().populate('ageRange');
};

const getDificultadById = async (id) => {
  return await NivelDificultad.findById(id).populate('ageRange');
};

const updateDificultad = async (id, data) => {
  // populate también al actualizar para devolver el objeto completo
  return await NivelDificultad.findByIdAndUpdate(id, data, { new: true }).populate('ageRange');
};

const deleteDificultad = async (id) => {
  return await NivelDificultad.findByIdAndDelete(id);
};

module.exports = {
  createDificultad,
  getDificultades,
  getDificultadById,
  updateDificultad,
  deleteDificultad
};