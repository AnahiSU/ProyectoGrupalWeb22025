const mongoose = require('mongoose');
require('dotenv').config();

const Admin = require('./models/admin');
const Estudiante = require('./models/estudiante');
const Categoria = require('./models/Categoria');
const SubCategoria = require('./models/SubCategoria');
const { RangoEdad } = require('./models/rangoEdad');
const { NivelDificultad } = require('./models/dificultad');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✓ Conectado a MongoDB');
    } catch (error) {
        console.error('✗ Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

const clearDB = async () => {
    try {
        await Promise.all([
            Admin.deleteMany({}),
            Estudiante.deleteMany({}),
            Categoria.deleteMany({}),
            SubCategoria.deleteMany({}),
            RangoEdad.deleteMany({}),
            NivelDificultad.deleteMany({})
        ]);
        console.log('✓ Base de datos limpiada');
    } catch (error) {
        console.error('✗ Error al limpiar la base de datos:', error);
        throw error;
    }
};

const seedData = async () => {
    try {
        const admins = await Admin.create([
            {
                nombre: 'Admin Principal',
                email: 'admin@quizizz.com',
                password: 'admin123'
            },
            {
                nombre: 'Admin Secundario',
                email: 'admin2@quizizz.com',
                password: 'admin123'
            }
        ]);
        console.log(`✓ ${admins.length} administradores creados`);

        const estudiantes = await Estudiante.create([
            {
                nombre: 'Juan Perez',
                email: 'juan@estudiante.com',
                password: 'estudiante123'
            },
            {
                nombre: 'Maria Garcia',
                email: 'maria@estudiante.com',
                password: 'estudiante123'
            },
            {
                nombre: 'Carlos Lopez',
                email: 'carlos@estudiante.com',
                password: 'estudiante123'
            },
            {
                nombre: 'Ana Martinez',
                email: 'ana@estudiante.com',
                password: 'estudiante123'
            }
        ]);
        console.log(`✓ ${estudiantes.length} estudiantes creados`);

        const categorias = await Categoria.create([
            {
                id_categoria: 'CAT001',
                nombre_categoria: 'MATEMATICAS',
                descripcion_categoria: 'Preguntas relacionadas con matematicas y calculo',
                sigla: 'MAT'
            },
            {
                id_categoria: 'CAT002',
                nombre_categoria: 'CIENCIAS',
                descripcion_categoria: 'Preguntas de biologia, quimica y fisica',
                sigla: 'CIE'
            },
            {
                id_categoria: 'CAT003',
                nombre_categoria: 'HISTORIA',
                descripcion_categoria: 'Eventos historicos y culturales',
                sigla: 'HIS'
            },
            {
                id_categoria: 'CAT004',
                nombre_categoria: 'LENGUAJE',
                descripcion_categoria: 'Gramatica, literatura y comprension lectora',
                sigla: 'LEN'
            },
            {
                id_categoria: 'CAT005',
                nombre_categoria: 'GEOGRAFIA',
                descripcion_categoria: 'Geografia fisica y politica',
                sigla: 'GEO'
            }
        ]);
        console.log(`✓ ${categorias.length} categorias creadas`);

        const subcategorias = await SubCategoria.create([
            {
                id_subcategoria: 'SUB001',
                nombre_subcategoria: 'ALGEBRA',
                descripcion_subcategoria: 'Ecuaciones, expresiones algebraicas',
                sigla: 'ALG',
                id_categoria: categorias[0]._id
            },
            {
                id_subcategoria: 'SUB002',
                nombre_subcategoria: 'GEOMETRIA',
                descripcion_subcategoria: 'Figuras, areas y volumenes',
                sigla: 'GEOMAT',
                id_categoria: categorias[0]._id
            },
            {
                id_subcategoria: 'SUB003',
                nombre_subcategoria: 'ARITMETICA',
                descripcion_subcategoria: 'Operaciones basicas y fracciones',
                sigla: 'ARI',
                id_categoria: categorias[0]._id
            },
            {
                id_subcategoria: 'SUB004',
                nombre_subcategoria: 'BIOLOGIA',
                descripcion_subcategoria: 'Seres vivos y ecosistemas',
                sigla: 'BIO',
                id_categoria: categorias[1]._id
            },
            {
                id_subcategoria: 'SUB005',
                nombre_subcategoria: 'QUIMICA',
                descripcion_subcategoria: 'Elementos, reacciones quimicas',
                sigla: 'QUI',
                id_categoria: categorias[1]._id
            },
            {
                id_subcategoria: 'SUB006',
                nombre_subcategoria: 'FISICA',
                descripcion_subcategoria: 'Mecanica, energia y movimiento',
                sigla: 'FIS',
                id_categoria: categorias[1]._id
            },
            {
                id_subcategoria: 'SUB007',
                nombre_subcategoria: 'HISTORIA ANTIGUA',
                descripcion_subcategoria: 'Civilizaciones antiguas',
                sigla: 'HAN',
                id_categoria: categorias[2]._id
            },
            {
                id_subcategoria: 'SUB008',
                nombre_subcategoria: 'HISTORIA MODERNA',
                descripcion_subcategoria: 'Siglos XIX y XX',
                sigla: 'HMO',
                id_categoria: categorias[2]._id
            },
            {
                id_subcategoria: 'SUB009',
                nombre_subcategoria: 'GRAMATICA',
                descripcion_subcategoria: 'Reglas del lenguaje',
                sigla: 'GRA',
                id_categoria: categorias[3]._id
            },
            {
                id_subcategoria: 'SUB010',
                nombre_subcategoria: 'LITERATURA',
                descripcion_subcategoria: 'Analisis literario',
                sigla: 'LIT',
                id_categoria: categorias[3]._id
            }
        ]);
        console.log(`✓ ${subcategorias.length} subcategorias creadas`);

        const rangosEdad = await RangoEdad.create([
            { edadMin: 6, edadMax: 8 },
            { edadMin: 9, edadMax: 11 },
            { edadMin: 12, edadMax: 14 },
            { edadMin: 15, edadMax: 17 },
            { edadMin: 18, edadMax: 99 }
        ]);
        console.log(`✓ ${rangosEdad.length} rangos de edad creados`);

        const dificultades = await NivelDificultad.create([
            {
                nombre: 'Facil',
                descripcion: 'Para principiantes (6-8 anos)',
                rangoEdad: rangosEdad[0]._id
            },
            {
                nombre: 'Basico',
                descripcion: 'Nivel basico (9-11 anos)',
                rangoEdad: rangosEdad[1]._id
            },
            {
                nombre: 'Intermedio',
                descripcion: 'Nivel intermedio (12-14 anos)',
                rangoEdad: rangosEdad[2]._id
            },
            {
                nombre: 'Avanzado',
                descripcion: 'Nivel avanzado (15-17 anos)',
                rangoEdad: rangosEdad[3]._id
            },
            {
                nombre: 'Experto',
                descripcion: 'Nivel experto (18+ anos)',
                rangoEdad: rangosEdad[4]._id
            }
        ]);
        console.log(`✓ ${dificultades.length} niveles de dificultad creados`);
        console.log('✓ Base de datos poblada exitosamente');

    } catch (error) {
        console.error('✗ Error al poblar la base de datos:', error);
    }
};

const main = async () => {
    await connectDB();
    await clearDB();
    await seedData();
    await mongoose.connection.close();
    console.log('✓ Desconectado de MongoDB');
    process.exit(0);
};

main().catch(error => {
    console.error('Error fatal:', error);
    process.exit(1);
});
