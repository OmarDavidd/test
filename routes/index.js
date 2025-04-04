const express = require('express');
const homeRoutes = require('./home');
const userRoutes = require('./user');
const bookRoutes = require('./book');
const router = express.Router();

router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/libros', bookRoutes);

module.exports = router;