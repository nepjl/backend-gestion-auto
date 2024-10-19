import express from 'express';
import { userSeConnecter, getUserProfile, userDeconnecter } from '../controllers/userController.js';
import { verifierToken } from '../middlewares/userAuth.js';

const Route = express.Router();

Route.post('/login', userSeConnecter);
Route.get('/logout', userDeconnecter);
Route.get('/dashboard', verifierToken, getUserProfile );



export default Route;


