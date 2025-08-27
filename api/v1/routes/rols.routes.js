const { Router } = require("express")
const rolsController = require('../../../controllers/rolsController');

const router = Router();

router.get("/", rolsController.getAllRols);
router.get("/:id", rolsController.getRol);
router.post("/", rolsController.createRol);
router.put("/:id", rolsController.updateRol);
router.delete("/:id", rolsController.deleteRol);

module.exports = router;