const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('users/home_user', { title: 'Hola usuario' });
});

router.put('/', (req, res) => {
	res.send('put users');
});

router.post('/', (req, res) => {
	res.send('post users');
});

router.delete('/', (req, res) => {
	res.send('delete users');
});

module.exports = router;
