const { RangoEdad } = require('../models/rangoEdad'); // Ajusta la ruta a tu archivo de modelos

const createRango = async (rangoData) => {
  return await RangoEdad.create(rangoData);
};

const getRangos = async () => {
  return await RangoEdad.find();
};

const getRangoById = async (id) => {
  return await RangoEdad.findById(id);
};

const updateRango = async (id, rangoData) => {
  // { new: true } devuelve el objeto ya actualizado
  return await RangoEdad.findByIdAndUpdate(id, rangoData, { new: true });
};

const deleteRango = async (id) => {
  return await RangoEdad.findByIdAndDelete(id);
};

module.exports = {
  createRango,
  getRangos,
  getRangoById,
  updateRango,
  deleteRango
};