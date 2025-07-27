// routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();
const {
  getInventory,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/inventoryController');

router.get('/', getInventory);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
