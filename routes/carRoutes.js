import express from 'express';
import { userAuth } from '../middlewares/userAuth.js'
import { afficherVehicules, rechercherVehicule, ajouterVehicule, mettreAjourVehicule, supprimerVehicule} from '../controllers/carController.js'

const Route = express.Router();

Route.get('/vehicules', afficherVehicules);
Route.get('/vehicules/recherche', rechercherVehicule);
Route.post('/vehicules', userAuth, ajouterVehicule);
Route.put('/vehicules/:id', userAuth, mettreAjourVehicule);
Route.delete('/vehicules/:id', userAuth,  supprimerVehicule);

export default Route;