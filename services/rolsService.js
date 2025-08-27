// services/rolsService.js
const db = require('../models'); // importa el index.js de models

const getAllRols = async () => {
    try {
        return await db.Rols.findAll();
    } catch (error) {
        throw new Error(error.message || "Failed to get Rols");
    }
};

const getRol = async (id) => {
    try {
        return await db.Rols.findByPk(id);
    } catch (error) {
        throw new Error(error.message || "Failed to get Rol");
    }
};

const createRol = async ({ name}) => {
    try {
        return await db.Rols.create({ name});
    } catch (error) {
        throw new Error(error.message || "Rol could not be created");
    }
    };

const updateRol = async (id, { name }) => {
    try {
        return await db.Rols.update(
        { name },
        { where: { id } }
        );
    } catch (error) {
        throw new Error(error.message || "Rol could not be updated");
    }
};

const deleteRol = async (id) => {
    try {
        return await db.Rols.destroy({ where: { id } });
    } catch (error) {
        throw new Error(error.message || "Rol could not be deleted");
    }
};

module.exports = {
    getAllRols,
    getRol,
    createRol,
    updateRol,
    deleteRol,
};