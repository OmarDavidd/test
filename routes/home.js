const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', (req, res) => homeController.getHome(req, res));
router.put('/', (req, res) => homeController.updateHome(req, res));
router.post('/', (req, res) => homeController.addHome(req, res));
router.delete('/', (req, res) => homeController.deleteHome(req, res));

module.exports = router;