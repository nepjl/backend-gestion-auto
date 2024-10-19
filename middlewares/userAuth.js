import jwt from 'jsonwebtoken';

export const verifierToken = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Accès refusé' });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_KEY);
        req.user = verified;
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Token invalide' });
    }
};
