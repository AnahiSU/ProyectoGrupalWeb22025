const SubCategoria = require('../models/SubCategoria');
const Categoria = require('../models/Categoria');

class SubCategoriaService {
    async createSubCategoria(datos) {
        try {
            const categoriaExiste = await Categoria.findById(datos.id_categoria);
            if (!categoriaExiste) {
                throw new Error('La categoria padre no existe');
            }

            const subCategoria = new SubCategoria(datos);
            return await subCategoria.save();
        } catch (error) {
            throw error;
        }
    }

    async getSubCategoria() {
        try {
            return await SubCategoria.find()
                .populate('id_categoria', 'nombre_categoria sigla')
                .sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    }

    async getSubCategoriaById(id) {
        try {
            const subCategoria = await SubCategoria.findById(id)
                .populate('id_categoria', 'nombre_categoria sigla');
            if (!subCategoria) {
                throw new Error('Subcategoría no encontrada');
            }
            return subCategoria;
        } catch (error) {
            throw error;
        }
    }

    async getSubCategoriaByCategoria(idCategoria) {
        try {
            return await SubCategoria.find({ id_categoria: idCategoria })
                .populate('id_categoria', 'nombre_categoria sigla')
                .sort({ nombre_subcategoria: 1 });
        } catch (error) {
            throw error;
        }
    }

    async updateSubCategoria(id, datos) {
        try {
            // Si se está cambiando la categoría, verificar que existe
            if (datos.id_categoria) {
                const categoriaExiste = await Categoria.findById(datos.id_categoria);
                if (!categoriaExiste) {
                    throw new Error('La categoría padre no existe');
                }
            }

            const subCategoria = await SubCategoria.findByIdAndUpdate(
                id,
                datos,
                { new: true, runValidators: true }
            ).populate('id_categoria', 'nombre_categoria sigla');

            if (!subCategoria) {
                throw new Error('Subcategoría no encontrada');
            }
            return subCategoria;
        } catch (error) {
            throw error;
        }
    }

    async deleteSubCategoria(id) {
        try {
            const subCategoria = await SubCategoria.findByIdAndDelete(id);
            if (!subCategoria) {
                throw new Error('Subcategoría no encontrada');
            }
            return subCategoria;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new SubCategoriaService();
