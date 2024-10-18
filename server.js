import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const port = process.env.PORT || 6000;

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api', (req, res) => {
    res.send(`Bienvenue sur notre API`)
});

app.listen(port, ()=> {
    console.log(`Le serveur écoute bien sur le port ${port}`);
})
