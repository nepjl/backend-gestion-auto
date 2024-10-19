import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'token-autho-key';

export const userSeConnecter = async (req, res) => {
    const { email, password } = req.body;
    console.log(`Données reçues : `, {email, password});
    
    console.log(req);
    
    try {
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).json({ erreur: `Cet identifiant n'est pas valide :(` });
        }
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (erreur) {
        console.error(erreur);
        res.status(500).json({ erreur: `Connexion impossible !!!` });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.userId } });
        console.log(`Utilisateur récupéré : `, user);
        
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }
        return res.status(200).json({ utilisateur: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur du serveur survenue !!!!' });
    }
};

export const userDeconnecter = (req, res) => {
    res.json({ message: 'Déconnexion réussie' });
};
