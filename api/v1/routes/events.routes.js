const { Router } = require("express")
const eventsController = require('../../../controllers/eventsController');

const router = Router();

router.get("/", eventsController.getAllEvents);
router.get("/:id", eventsController.getEvent);
router.post("/", eventsController.createEvent);
router.put("/:id", eventsController.updateEvent);
router.delete("/:id", eventsController.deleteEvent);

module.exports = router;