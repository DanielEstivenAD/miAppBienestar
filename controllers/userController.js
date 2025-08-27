const userService = require('../services/userService');

const getAllUser = async (req, res) => {
    try {
        const allUsers = await userService.getAllUser();
        res.status(200).json({ status: "Ok", data: allUsers });
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
    
    // Validar que el ID sea un número válido
        if (!id || isNaN(id)) {
        return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
        }
    
        const user = await userService.getUser(id);
        if (user) {
        res.status(200).json({ status: "Ok", data: user });
        } else {
        res.status(404).json({ status: "FAILED", message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email, password, phone, birthdate, document, gender, state, rolId } = req.body;
        
        // Validación más robusta
        if (!username || !email) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "Name and email are required" 
        });
        }
        
        if (username.length > 30) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "Name must be 30 characters or less" 
        });
        }
        
        // Validar rolId si se proporciona
        if (rolId && isNaN(rolId)) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "rolId must be a valid number" 
        });
        }
        
        const created = await userService.createUser({ username, email, password, phone, birthdate, document, gender, state, rolId });
        res.status(201).json({ status: "Ok", data: created });
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password, phone, birthdate, document, gender, state, rolId} = req.body;
        
        // Validar que el ID sea un número válido
        if (!id || isNaN(id)) {
        return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
        }
        
        // Validar longitud del nombre si se proporciona
        if (username && username.length > 30) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "Name must be 30 characters or less" 
        });
        }
        
        // Validar rolId si se proporciona
        if (rolId && isNaN(rolId)) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "rolId must be a valid number" 
        });
        }
        
        const updated = await userService.updateUser(id, { username, email, password, phone, birthdate, document, gender, state, rolId  });

        if (updated[0] > 0) {
        res.status(200).json({ status: "Ok", message: "User updated successfully" });
        } else {
        res.status(404).json({ status: "FAILED", message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Validar que el ID sea un número válido
        if (!id || isNaN(id)) {
        return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
        }
        
        const deleted = await userService.deleteUser(id);

        if (deleted) {
        res.status(200).json({ status: "Ok", message: "User deleted successfully" });
        } else {
        res.status(404).json({ status: "FAILED", message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "FAILED", error: error.message });
    }
};

module.exports = {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};