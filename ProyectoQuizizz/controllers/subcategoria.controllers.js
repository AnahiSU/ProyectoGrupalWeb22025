const subCategoriaService = require('../services/subcategoria.services');

class SubCategoriaController {
    async createSubCategoria(req, res) {
        try {
            const subCategoria = await subCategoriaService.createSubCategoria(req.body);
            res.status(201).json({
                success: true,
                message: 'Subcategoría creada exitosamente',
                data: subCategoria
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || 'Error al crear la subcategoria',
                error: error.message
            });
        }
    }

    async getSubCategoria(req, res) {
        try {
            const subCategorias = await subCategoriaService.getSubCategoria();
            res.status(200).json({
                success: true,
                count: subCategorias.length,
                data: subCategorias
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener las subcategorias',
                error: error.message
            });
        }
    }

    async getSubCategoriaById(req, res) {
        try {
            const subCategoria = await subCategoriaService.getSubCategoriaById(req.params.id);
            res.status(200).json({
                success: true,
                data: subCategoria
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message || 'Subcategoria no encontrada',
                error: error.message
            });
        }
    }

    async getSubCategoriaByCategoria(req, res) {
        try {
            const subCategorias = await subCategoriaService.getSubCategoriaByCategoria(req.params.idCategoria);
            res.status(200).json({
                success: true,
                count: subCategorias.length,
                data: subCategorias
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener las subcategorias por categoria',
                error: error.message
            });
        }
    }

    async updateSubCategoria(req, res) {
        try {
            const subCategoria = await subCategoriaService.updateSubCategoria(req.params.id, req.body);
            res.status(200).json({
                success: true,
                message: 'Subcategoría actualizada exitosamente',
                data: subCategoria
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || 'Error al actualizar la subcategoria',
                error: error.message
            });
        }
    }

    async deleteSubCategoria(req, res) {
        try {
            const subCategoria = await subCategoriaService.deleteSubCategoria(req.params.id);
            res.status(200).json({
                success: true,
                message: 'Subcategoría eliminada exitosamente',
                data: subCategoria
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message || 'Error al eliminar la subcategoria',
                error: error.message
            });
        }
    }
}

module.exports = new SubCategoriaController();
