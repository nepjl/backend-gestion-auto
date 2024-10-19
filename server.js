import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { main } from './config/db.js';



const port = process.env.PORT || 6000;

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(main);





app.use('/api', (req, res) => {
    res.send(`Bienvenue sur notre API`)
});

app.listen(port, ()=> {
    console.log(`Le serveur écoute bien sur le port ${port}`);
})
