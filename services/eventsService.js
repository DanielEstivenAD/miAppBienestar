// services/eventsService.js
const db = require('../models');

const getAllEvents = async () => {
  try {
    return await db.Events.findAll({
      include: [{
        model: db.Categories,
        as: 'category'
      }],
      include: [{
        model: db.User,
        as: 'user'
      }]
    });
  } catch (error) {
    throw new Error(error.message || "Failed to get Events");
  }
};

const getEvent = async (id) => {
  try {
    return await db.Events.findByPk(id, {
      include: [{
        model: db.Categories,
        as: 'category'
      }],
      include: [{
        model: db.User,
        as: 'user'
      }]
    });
  } catch (error) {
    throw new Error(error.message || "Failed to get Event");
  }
};

const createEvent = async ({ name, description, starDate, endDate, state, maxCapacity, categoryId, userId }) => {
  try {
    return await db.Events.create({
      name,
      description,
      starDate,
      endDate,
      state,
      maxCapacity,
      categoryId,
      userId
    });
  } catch (error) {
    throw new Error(error.message || "Event could not be created");
  }
};

const updateEvent = async (id, { name, description, starDate, endDate, state, maxCapacity, categoryId, userId }) => {
  try {
    return await db.Events.update(
      { name, description, starDate, endDate, state, maxCapacity, categoryId, userId },
      { where: { id } }
    );
  } catch (error) {
    throw new Error(error.message || "Event could not be updated");
  }
};

const deleteEvent = async (id) => {
  try {
    return await db.Events.destroy({ where: { id } });
  } catch (error) {
    throw new Error(error.message || "Event could not be deleted");
  }
};

module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};