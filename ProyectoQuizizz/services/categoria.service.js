const Categoria = require('../models/Categoria');

class CategoriaService {
    async createCategoria(datos) {
        try {
            const categoria = new Categoria(datos);
            return await categoria.save();
        } catch (error) {
            throw error;
        }
    }

    async getCategoria() {
        try {
            return await Categoria.find().sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    }

    async getCategoriaById(id) {
        try {
            const categoria = await Categoria.findById(id);
            if (!categoria) {
                throw new Error('Categoria no encontrada');
            }
            return categoria;
        } catch (error) {
            throw error;
        }
    }

    async updateCategoria(id, datos) {
        try {
            const categoria = await Categoria.findByIdAndUpdate(
                id,
                datos,
                { new: true, runValidators: true }
            );
            if (!categoria) {
                throw new Error('Categoria no encontrada');
            }
            return categoria;
        } catch (error) {
            throw error;
        }
    }

    async deleteCategoria(id) {
        try {
            const categoria = await Categoria.findByIdAndDelete(id);
            if (!categoria) {
                throw new Error('Categoria no encontrada');
            }
            return categoria;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CategoriaService();
