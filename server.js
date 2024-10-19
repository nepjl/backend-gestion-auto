import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { verifierToken } from './middlewares/userAuth.js';

dotenv.config();

const port = process.env.PORT || 6000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', verifierToken);

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
