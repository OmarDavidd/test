const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const productos = [
		{
			nombre: 'Gallina',
			precio: 10.4
		},
		{
			nombre: 'Gallina2',
			precio: 10.4
		},
		{
			nombre: 'Gallina3',
			precio: 10.4
		},
		{
			nombre: 'Gallina4',
			precio: 10.4
		}
	];
	res.render('home/index', { titulo: '<i>Hola<i>', productos });
});

router.put('/', (req, res) => {
	res.send('put home');
});

router.post('/', (req, res) => {
	res.send('post home');
});

router.delete('/', (req, res) => {
	res.send('delete home');
});

module.exports = router;