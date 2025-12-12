const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const tokenHeader = req.header('Authorization');

    if (!tokenHeader || !tokenHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Acceso denegado. No hay token.' });
    }

    const token = tokenHeader.split(' ')[1];

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token no válido o expirado' });
    }
};


const autorizarRoles = (rolesPermitidos) => {
    return (req, res, next) => {
        const userRole = req.user.rol;
        if (rolesPermitidos.includes(userRole)) {
            next();
        } else {
            return res.status(403).json({
                message: `Acesso denegado a rol ${userRole}`
            })
        }
    }
}

module.exports = {
    verificarToken,
    autorizarRoles
};
