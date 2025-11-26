const { NivelDificultad } = require('../models/dificultad'); 

const createDificultad = async (data) => {
  return await NivelDificultad.create(data);
};

const getDificultades = async () => {
  return await NivelDificultad.find().populate('ageRange');
};

const getDificultadById = async (id) => {
  return await NivelDificultad.findById(id).populate('ageRange');
};

const updateDificultad = async (id, data) => {
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