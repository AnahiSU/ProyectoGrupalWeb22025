# Manual de Instalacion - Proyecto Tributos del 11

## Requisitos Previos

- **Node.js** (version mayor a 20.19.0 o menor a la version 22 ya que spdy dio problemas con la ultima de Node)
- **npm** (viene incluido con Node.js)
- Cuenta en **MongoDB Atlas** (o instancia local de MongoDB)
- Editor de código (recomendado: VS Code)

---

## 1. Instalacion de Dependencias

Navegar a la carpeta del proyecto e instalar las dependencias:

```bash
cd ProyectoQuizizz
npm install
```

---

## 2. Configuracion de Variables de Entorno

### 2.1 Crear archivo `.env`

En la carpeta raiz del proyecto `ProyectoQuizizz/`, crear el archivo `.env` con el siguiente contenido:

```env

JWT_SECRET=mojabi_ghost_secret_key
JWT_EXPIRE=1h
MONGO_URI = 'mongodb+srv://arricksito-chan:svOEcjuK4xDkcXh9@proyectoweb.s3meyvp.mongodb.net/?appName=ProyectoWeb'
PORT = 3000

```

## 3. Configuracion de Certificados SSL (Desarrollo)
Se deben generar los certificados dentro de la carpeta ProyectoQuizizz/certs con los nombres: key.pem y cert.pem
Se pueden configurar sus rutas en bin/www

# Generar certificados auto-firmados dentro de ProyectoQuizizz/certs
```
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes
```

Durante la generacion, se solicitara la siguiente informacion:

- Country Name: BO
- State: Cochabamba
- Locality: CB
- Organization: UMSS
- Common Name: **localhost** (importante)


---

## 4. Iniciar el Servidor

### Modo Desarrollo (con auto-reload)
```bash
npm run dev
```

El servidor se ejecutara en `https://localhost:3000`

---

## 5. Verificar la Instalacion

### 5.1 Endpoint de prueba

Abrir navegador y visitar: `https://localhost:3000`

Continuar luego de la advertencia de seguridad

Deberia verse el mensaje:
```json
{
  "success": true,
  "message": "bievenido al proyecto de los tributos del 11"
}
```

### 5.2 Probar el registro de usuario

# Registro de Admin
POST https://localhost:3000/auth/register 
  body: {
    "nombre": "admin_test",
    "email": "admin_test@test.com",
    "password": "password123",
    "rol": "admin"
  }

# Registro de Estudiante
POST https://localhost:3000/auth/register \
body: {
    "nombre": "estudiante_test",
    "email": "estudiante_test@test.com",
    "password": "password123",
    "rol": "estudiante"
  }


### 5.3 Probar el login

POST https://localhost:3000/auth/login \
  body: {
    "nombre": "admin",
    "email": "admin@quizizz.com",
    "password": "admin123",
    "rol": "admin"
  }


Deberia recibir un token JWT en la respuesta.

---

## 6. Endpoints Disponibles

### Autenticacion (publicos)
- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesion

### Categorias (requieren autenticacion)
- `POST /categoria/createCategoria` - Crear categoria (admin)
- `GET /categoria/getCategoria` - Obtener todas las categorias
- `GET /categoria/getCategoriaById/:id` - Obtener categoria por ID
- `PUT /categoria/updateCategoria/:id` - Actualizar categoria (admin)
- `DELETE /categoria/deleteCategoria/:id` - Eliminar categoria (admin)

### Subcategorias (requieren autenticacion)
- `POST /subcategoria/createSubCategoria` - Crear subcategoria (admin)
- `GET /subcategoria/getSubCategoria` - Obtener todas las subcategorias
- `GET /subcategoria/getSubCategoriaById/:id` - Obtener subcategoria por ID
- `GET /subcategoria/getSubCategoriaByCategoria/:idCategoria` - Obtener subcategorias por categoria
- `PUT /subcategoria/updateSubCategoria/:id` - Actualizar subcategoria (admin)
- `DELETE /subcategoria/deleteSubCategoria/:id` - Eliminar subcategoria (admin)

### Dificultad (requieren autenticacion)
- `POST /dificultad` - Crear nivel de dificultad (admin)
- `GET /dificultad` - Obtener todos los niveles
- `GET /dificultad/:id` - Obtener nivel por ID
- `PUT /dificultad/:id` - Actualizar nivel (admin)
- `DELETE /dificultad/:id` - Eliminar nivel (admin)

### Rangos de Edad (requieren autenticacion)
- `POST /rango` - Crear rango de edad (admin)
- `GET /rango` - Obtener todos los rangos
- `GET /rango/:id` - Obtener rango por ID
- `PUT /rango/:id` - Actualizar rango (admin)
- `DELETE /rango/:id` - Eliminar rango (admin)

**Formato de autenticacion:** Incluir en headers:
```
Authorization: Bearer <TOKEN_JWT>
```

---

## 7. Informacion Adicional

### Tecnologias Utilizadas
- **Node.js** + **Express** - Backend framework
- **MongoDB** + **Mongoose** - Base de datos
- **JWT** - Autenticación
- **bcryptjs** - Encriptacion de contraseñas
- **SPDY** - HTTP/2 y HTTPS

### Seguridad
- Las contraseñas se encriptan automaticamente con bcrypt
- Los tokens JWT expiran en 1 hora
- Se implementa autenticacion por roles (admin/estudiante)

### Notas de Desarrollo
- El servidor usa HTTPS en desarrollo (puerto 3000)
- Nodemon está configurado para auto-reload en modo desarrollo
- Los certificados SSL son auto-firmados (solo para desarrollo)
