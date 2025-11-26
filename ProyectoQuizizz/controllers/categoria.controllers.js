const categoriaService = require('../services/categoria.service');

class CategoriaController {
    async createCategoria(req, res) {
        try {
            const categoria = await categoriaService.createCategoria(req.body);
            res.status(201).json({
                success: true,
                message: 'Categoria creada exitosamente',
                data: categoria
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || 'Error al crear la categoria',
                error: error.message
            });
        }
    }

    async getCategoria(req, res) {
        try {
            const categorias = await categoriaService.getCategoria();
            res.status(200).json({
                success: true,
                count: categorias.length,
                data: categorias
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener las categorias',
                error: error.message
            });
        }
    }

    async getCategoriaById(req, res) {
        try {
            const categoria = await categoriaService.getCategoriaById(req.params.id);
            res.status(200).json({
                success: true,
                data: categoria
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message || 'Categoria no encontrada',
                error: error.message
            });
        }
    }

    async updateCategoria(req, res) {
        try {
            const categoria = await categoriaService.updateCategoria(req.params.id, req.body);
            res.status(200).json({
                success: true,
                message: 'Categoria actualizada exitosamente',
                data: categoria
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || 'Error al actualizar la categoria',
                error: error.message
            });
        }
    }

    async deleteCategoria(req, res) {
        try {
            const categoria = await categoriaService.deleteCategoria(req.params.id);
            res.status(200).json({
                success: true,
                message: 'Categoría eliminada exitosamente',
                data: categoria
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message || 'Error al eliminar la categoria',
                error: error.message
            });
        }
    }
}

module.exports = new CategoriaController();
