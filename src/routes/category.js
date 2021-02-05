const express = require('express');
const categoryController = require('../controller/category');

const router = express.Router();

router.get('/', categoryController.retrieveAllCategory);

router.post('/', categoryController.createCategory);

router.get('/:id', categoryController.retrieveById);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
