const { Router } = require("express")
const categoriesController = require('../../../controllers/categoriesController'); // Corregir la referencia

const router = Router();

router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategorie);
router.post("/", categoriesController.createCategorie);
router.put("/:id", categoriesController.updateCategorie);
router.delete("/:id", categoriesController.deleteCategorie);

module.exports = router;