import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Afficher tous les véhicules
export const afficherVehicules = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars');
    console.log({rows});
    
    return res.json(result.rows);
    
    } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur serveur lors de la récupération des véhicules.' });
  }
};

// Rechercher un véhicule
export const rechercherVehicule = async (req, res) => {
  const { mark, model, year, color } = req.query;

  let query = 'SELECT * FROM cars WHERE 1=1';
  const params = [];

  if (mark) {
    query += ' AND mark = $' + (params.length + 1);
    params.push(mark);
  }
  if (model) {
    query += ' AND model = $' + (params.length + 1);
    params.push(model);
  }
  if (year) {
    query += ' AND year = $' + (params.length + 1);
    params.push(year);
  }
  if (color) {
    query += ' AND color = $' + (params.length + 1);
    params.push(color);
  }

  try {
    const result = await pool.query(query, params);
    return res.json(result.rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur serveur lors de la recherche du véhicule.' });
  }
};

// Ajouter un véhicule
export const ajouterVehicule = async (req, res) => {
  const { img_url, mark, model, year, color, mileage } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO cars (img_url, mark, model, year, color, mileage) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [img_url, mark, model, year, color, mileage]
    );
    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur serveur lors de l\'ajout du véhicule.' });
  }
};

// Mettre à jour un véhicule
export const mettreAjourVehicule = async (req, res) => {
  const { id } = req.params;
  const { img_url, mark, model, year, color, mileage } = req.body;

  try {
    const result = await pool.query(
      'UPDATE cars SET img_url = $1, mark = $2, model = $3, year = $4, color = $5, mileage = $6 WHERE id = $7 RETURNING *',
      [img_url, mark, model, year, color, mileage, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Voiture non trouvée' });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur serveur lors de la mise à jour du véhicule.' });
  }
};

// Supprimer un véhicule
export const supprimerVehicule = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM cars WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Voiture non trouvée' });
    }
    return res.json({ message: 'Voiture supprimée avec succès' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur serveur lors de la suppression du véhicule.' });
  }
};




