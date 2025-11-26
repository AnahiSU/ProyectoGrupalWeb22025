const rangoService = require('../services/rangos.service');

const createRango = async (req, res) => {
  try {
    const data = req.body;
    const nuevoRango = await rangoService.createRango(data);
    res.status(201).json({ success: true, nuevoRango });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getRangos = async (req, res) => {
  try {
    const rangos = await rangoService.getRangos();
    res.status(200).json({ success: true, rangos});
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getRangoById = async (req, res) => {
  try {
    const id = req.params.id
    const rango = await rangoService.getRangoById(id);
    if (!rango) return res.status(404).json({ success: false, message: 'Rango no encontrado' });
    res.status(200).json({ success: true, rango });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateRango = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const rangoActualizado = await rangoService.updateRango(id, data);
    if (!rangoActualizado) return res.status(404).json({ message: 'Rango no encontrado' });
    res.status(200).json({ success: true, rangoActualizado });
  } catch (error) {
    res.status(400).json({ success: false,message: error.message });
  }
};

const deleteRango = async (req, res) => {
  try {
    const id = req.params.id;
    const rangoEliminado = await rangoService.deleteRango(id);
    if (!rangoEliminado) return res.status(404).json({ message: 'Rango no encontrado' });
    res.status(200).json({ success: true,message: 'Rango eliminado correctamente'});
  } catch (error) {
    res.status(500).json({ success: false,message: error.message });
  }
};

module.exports = {
  createRango,
  getRangos,
  getRangoById,
  updateRango,
  deleteRango
};