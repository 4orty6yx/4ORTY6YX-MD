// Importez dotenv et chargez les variables d'environnement depuis le fichier .env
require("dotenv").config();

const { Pool } = require("pg");

// Utilisez le module 'set' pour obtenir la valeur de DATABASE_URL depuis vos configurations
const s = require("../set");

// Récupérez l'URL de la base de données de la variable s.DATABASE_URL
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : "postgresql://alunya_e8e4_user:vyk26QCkDRzbJL0gQqdXw4qZg8VIOZfs@dpg-cqgf04lds78s73cdvdn0-a.oregon-postgres.render.com/alunya_e8e4";
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

// Créez une pool de connexions PostgreSQL
const pool = new Pool(proConfig);

// Fonction pour créer la table "hentai"
const creerTableHentai = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS hentai (
        groupeJid text PRIMARY KEY
      );
    `);
    console.log("Table 'hentai' with 'groupeJid' as primary key was created successfully.");
  } catch (e) {
    console.error("Une erreur est survenue lors de la création de la table 'hentai':", e);
  }
};

// Appelez la méthode pour créer la table "hentai" avec 'groupeJid' comme clé primaire
creerTableHentai();

// Fonction pour ajouter un groupe à la liste de hentai
async function addToHentaiList(groupeJid) {
  const client = await pool.connect();
  try {
    // Insérez le groupe dans la table "hentai"
    const query = "INSERT INTO hentai (groupeJid) VALUES ($1)";
    const values = [groupeJid];

    await client.query(query, values);
    console.log(`Le groupe JID ${groupeJid} a été ajouté à la liste de hentai.`);
  } catch (error) {
    console.error("Erreur lors de l'ajout du groupe à la liste de hentai :", error);
  } finally {
    client.release();
  }
}

// Fonction pour vérifier si un groupe est dans la liste de hentai
async function checkFromHentaiList(groupeJid) {
  const client = await pool.connect();
  try {
    // Vérifiez si le groupe existe dans la table "hentai"
    const query = "SELECT EXISTS (SELECT 1 FROM hentai WHERE groupeJid = $1)";
    const values = [groupeJid];

    const result = await client.query(query, values);
    return result.rows[0].exists;
  } catch (error) {
    console.error("Erreur lors de la vérification de la présence du groupe dans la liste de hentai :", error);
    return false;
  } finally {
    client.release();
  }
}

// Fonction pour supprimer un groupe de la liste de hentai
async function removeFromHentaiList(groupeJid) {
  const client = await pool.connect();
  try {
    // Supprimez le groupe de la table "hentai"
    const query = "DELETE FROM hentai WHERE groupeJid = $1";
    const values = [groupeJid];

    await client.query(query, values);
    console.log(`Le groupe JID ${groupeJid} a été supprimé de la liste de hentai.`);
  } catch (error) {
    console.error("Erreur lors de la suppression du groupe de la liste de hentai :", error);
  } finally {
    client.release();
  }
}

module.exports = {
  addToHentaiList,
  checkFromHentaiList,
  removeFromHentaiList,
};
