import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { main } from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import carRoutes from './routes/carRoutes.js';

import { verifierToken } from './middlewares/userAuth.js';

dotenv.config();

const port = process.env.PORT || 6000;

const app = express();
app.use(express.json());
app.use(cors());
main

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
  
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  
    next();
  
  });

app.use('/auth', verifierToken);
app.use('/user', userRoutes);
app.use('/car', carRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Quelque chose a mal tourné!');
});


app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
