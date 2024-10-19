import express from 'express';
import { userSeConnecter, userDeconnecter } from '../controllers/userController.js';

const Route = express.Router();

Route.post('/login', userSeConnecter);
Route.get('/logout', userDeconnecter);



export default Route;


