//services/userService.js
const db = require('../models');

const getAllUser = async () => {
    try {
        return await db.User.findAll({
        include: [{
            model: db.Rols,
            as: 'rol'
        }]
        });
    } catch (error) {
        throw new Error(error.message || "Failed to get Users");
    }
};

const getUser = async (id) => {
    try {
        return await db.User.findByPk(id, {
        include: [{
            model: db.Rols,
            as: 'rol'
        }]
        });
    } catch (error) {
        throw new Error(error.message || "Failed to get User");
    }
};

const createUser = async ({ username, email, password, phone, birthdate, document, gender, state, rolId}) => {
    try {
        return await db.User.create({
        username,
        email,
        password,
        phone,
        birthdate,
        document,
        gender,
        state,
        rolId
        });
    } catch (error) {
        throw new Error(error.message || "User could not be created");
    }
};

const updateUser = async (id, { username, email, password, phone, birthdate, document, gender, state, rolId}) => {
    try {
        return await db.User.update(
        {username, email, password, phone, birthdate, document, gender, state, rolId},
        { where: { id } }
        );
    } catch (error) {
        throw new Error(error.message || "User could not be updated");
    }
};

const deleteUser = async (id) => {
    try {
        return await db.User.destroy({ where: { id } });
    } catch (error) {
        throw new Error(error.message || "User could not be deleted");
    }
};

module.exports = {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
