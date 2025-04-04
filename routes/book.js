const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book_controller');

router.get('/', (req, res) => bookController.getAll(req, res));
router.get('/:id(\\d+)', (req, res) => bookController.getById(req, res));
router.put('/:id', (req, res) => bookController.updateBook(req, res));
router.post('/', (req, res) => bookController.addBook(req, res));
router.delete('/:id', (req, res) => bookController.deleteBook(req, res));


module.exports = router;