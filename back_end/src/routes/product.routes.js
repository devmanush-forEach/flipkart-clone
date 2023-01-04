const productController = require("../controllers/product.controller");
const userController = require("../controllers/user.controller");
const Authenticate = require("../middlewares/authenticate");

const router = require("express").Router();

router.get("/", productController.getProducts);
router.post("/create", productController.createProduct);
router.post("/createMany", productController.createManyProducts);
router.post("/update", productController.updateProduct);
router.delete("/", productController.deleteProduct);

module.exports = router;
