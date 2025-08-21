const categoriesService = require('../services/categoriesService');

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await categoriesService.getAllCategories();
    res.status(200).json({ status: "Ok", data: allCategories });
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const getCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validar que el ID sea un número válido
    if (!id || isNaN(id)) {
      return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
    }
    
    const categorie = await categoriesService.getCategorie(id);
    if (categorie) {
      res.status(200).json({ status: "Ok", data: categorie });
    } else {
      res.status(404).json({ status: "FAILED", message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const createCategorie = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    
    // Validación más robusta
    if (!name || !description) {
      return res.status(400).json({ 
        status: "FAILED", 
        error: "Name and description are required" 
      });
    }
    
    if (name.length > 30) {
      return res.status(400).json({ 
        status: "FAILED", 
        error: "Name must be 30 characters or less" 
      });
    }
    
    const created = await categoriesService.createCategorie({ name, description, image });
    res.status(201).json({ status: "Ok", data: created });
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const updateCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;
    
    // Validar que el ID sea un número válido
    if (!id || isNaN(id)) {
      return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
    }
    
    // Validar longitud del nombre si se proporciona
    if (name && name.length > 30) {
      return res.status(400).json({ 
        status: "FAILED", 
        error: "Name must be 30 characters or less" 
      });
    }
    
    const updated = await categoriesService.updateCategorie(id, { name, description, image });

    if (updated[0] > 0) {
      res.status(200).json({ status: "Ok", message: "Category updated successfully" });
    } else {
      res.status(404).json({ status: "FAILED", message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const deleteCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validar que el ID sea un número válido
    if (!id || isNaN(id)) {
      return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
    }
    
    const deleted = await categoriesService.deleteCategorie(id);

    if (deleted) {
      res.status(200).json({ status: "Ok", message: "Category deleted successfully" });
    } else {
      res.status(404).json({ status: "FAILED", message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategorie,
  createCategorie,
  updateCategorie,
  deleteCategorie,
};