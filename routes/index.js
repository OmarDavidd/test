const express = require('express');
const homeRoutes = require('./home');
const userRoutes = require('./user');
const router = express.Router();

router.use('/', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;