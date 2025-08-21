const eventsService = require('../services/eventsService');

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await eventsService.getAllEvents();
    res.status(200).json({ status: "Ok", data: allEvents });
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id || isNaN(id)) {
      return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
    }
    
    const event = await eventsService.getEvent(id);
    if (event) {
      res.status(200).json({ status: "Ok", data: event });
    } else {
      res.status(404).json({ status: "FAILED", message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const createEvent = async (req, res) => {
    try {
    const { name, description, starDate, endDate, state, maxCapacity, CategoryId } = req.body;
    
    if (!name || !description) {
        return res.status(400).json({ 
            status: "FAILED", 
            error: "Name and description are required" 
        });
    }
    
    // Validar CategoryId si se proporciona
    if (CategoryId && isNaN(CategoryId)) {
      return res.status(400).json({ 
        status: "FAILED", 
        error: "CategoryId must be a valid number" 
      });
    }
    
    const created = await eventsService.createEvent({
      name,
      description,
      starDate,
      endDate,
      state,
      maxCapacity,
      CategoryId
    });
    res.status(201).json({ status: "Ok", data: created });
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, starDate, endDate, state, maxCapacity, CategoryId } = req.body;
    
    if (!id || isNaN(id)) {
      return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
    }
    
    // Validar CategoryId si se proporciona
    if (CategoryId && isNaN(CategoryId)) {
      return res.status(400).json({ 
        status: "FAILED", 
        error: "CategoryId must be a valid number" 
      });
    }
    
    const updated = await eventsService.updateEvent(id, {
      name,
      description,
      starDate,
      endDate,
      state,
      maxCapacity,
      CategoryId
    });

    if (updated[0] > 0) {
      res.status(200).json({ status: "Ok", message: "Event updated successfully" });
    } else {
      res.status(404).json({ status: "FAILED", message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id || isNaN(id)) {
      return res.status(400).json({ status: "FAILED", error: "Valid ID is required" });
    }
    
    const deleted = await eventsService.deleteEvent(id);

    if (deleted) {
      res.status(200).json({ status: "Ok", message: "Event deleted successfully" });
    } else {
      res.status(404).json({ status: "FAILED", message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
};

module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};