import express from 'express';
import { verifierToken } from '../middlewares/userAuth.js'
import { afficherVehicules, rechercherVehicule, ajouterVehicule, mettreAjourVehicule, supprimerVehicule} from '../controllers/carController.js'

const Route = express.Router();

Route.get('/vehicules', afficherVehicules);
Route.get('/vehicules/recherche', rechercherVehicule);
Route.post('/vehicules', verifierToken, ajouterVehicule);
Route.put('/vehicules/:id', verifierToken, mettreAjourVehicule);
Route.delete('/vehicules/:id', verifierToken,  supprimerVehicule);

export default Route;



