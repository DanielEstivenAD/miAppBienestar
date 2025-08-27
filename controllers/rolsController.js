const rolsService = require('../services/rolsService');

const getAllRols = async (req, res) => {
    try {
        const allRols = await rolsService.getAllRols();
        res.status(200).json({ status: "Ok", data: allRols });
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const getRol = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Validar que el ID sea un número válido
        if (!id || isNaN(id)) {
        return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
        }
        
        const rol = await rolsService.getRol(id);
        if (rol) {
        res.status(200).json({ status: "Ok", data: rol });
        } else {
        res.status(404).json({ status: "FAILED", message: "Role not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const createRol = async (req, res) => {
    try {
        const { name} = req.body;
        
        // Validación más robusta
        if (!name ) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "Name are required" 
        });
        }
        
        if (name.length > 30) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "Name must be 30 characters or less" 
        });
        }
        
        const created = await rolsService.createRol({ name });
        res.status(201).json({ status: "Ok", data: created });
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const updateRol = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        
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
        
        const updated = await rolsService.updateRol(id, { name });

        if (updated[0] > 0) {
        res.status(200).json({ status: "Ok", message: "Role updated successfully" });
        } else {
        res.status(404).json({ status: "FAILED", message: "Role not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const deleteRol = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Validar que el ID sea un número válido
        if (!id || isNaN(id)) {
        return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
        }
        
        const deleted = await rolsService.deleteRol(id);

        if (deleted) {
        res.status(200).json({ status: "Ok", message: "Role deleted successfully" });
        } else {
        res.status(404).json({ status: "FAILED", message: "Role not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

module.exports = {
    getAllRols,
    getRol,
    createRol,
    updateRol,
    deleteRol,
};