const dificultadService = require('../services/dificultad.service.js');

const createDificultad = async (req, res) => {
  try {
    const data = req.body;
    const nuevaDificultad = await dificultadService.createDificultad(data);
    res.status(201).json(nuevaDificultad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDificultades = async (req, res) => {
  try {
    const dificultades = await dificultadService.getDificultades();
    res.status(200).json(dificultades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDificultadById = async (req, res) => {
  try {
    const id = req.params.id;
    const dificultad = await dificultadService.getDificultadById(id);
    if (!dificultad) return res.status(404).json({ message: 'Dificultad no encontrada' });
    res.status(200).json(dificultad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDificultad = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const dificultadActualizada = await dificultadService.updateDificultad(id, data);
    if (!dificultadActualizada) return res.status(404).json({ message: 'Dificultad no encontrada' });
    res.status(200).json(dificultadActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDificultad = async (req, res) => {
  try {
    const id = req.params.id;
    const dificultadEliminada = await dificultadService.deleteDificultad(id);
    if (!dificultadEliminada) return res.status(404).json({ message: 'Dificultad no encontrada' });
    res.status(200).json({ message: 'Dificultad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDificultad,
  getDificultades,
  getDificultadById,
  updateDificultad,
  deleteDificultad
};