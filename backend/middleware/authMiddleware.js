const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed. Token not provided.' });
    }
    try {
        const decodedToken = jwt.verify(token, config.secretKey);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
    }
};
