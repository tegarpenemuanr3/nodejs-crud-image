const express = require("express");
const {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController.js");

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", saveProduct);
router.patch("/products/:id", updateProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
