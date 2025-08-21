// services/categoriesService.js
const db = require('../models'); // importa el index.js de models

const getAllCategories = async () => {
  try {
    return await db.categories.findAll();
  } catch (error) {
    throw new Error(error.message || "Failed to get Categories");
  }
};

const getCategorie = async (id) => {
  try {
    return await db.Categories.findByPk(id);
  } catch (error) {
    throw new Error(error.message || "Failed to get Categorie");
  }
};

const createCategorie = async ({ name, description, image }) => {
  try {
    return await db.Categories.create({ name, description, image });
  } catch (error) {
    throw new Error(error.message || "Categorie could not be created");
  }
};

const updateCategorie = async (id, { name, description, image }) => {
  try {
    return await db.Categories.update(
      { name, description, image },
      { where: { id } }
    );
  } catch (error) {
    throw new Error(error.message || "Categorie could not be updated");
  }
};

const deleteCategorie = async (id) => {
  try {
    return await db.Categories.destroy({ where: { id } });
  } catch (error) {
    throw new Error(error.message || "Categorie could not be deleted");
  }
};

module.exports = {
  getAllCategories,
  getCategorie,
  createCategorie,
  updateCategorie,
  deleteCategorie,
};