const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.cookies.token('auth-token');

    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    };

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        return next();
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports = auth;