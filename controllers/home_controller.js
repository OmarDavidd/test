const homeService = require('../services/home_service');

const homeController = {
	getHome: (req, res) => {
		const data = homeService.getDataHome();
		return res.render('home/index', { title: '<i>Hola<i>', ps: data });
	},

	addHome: (req, res) => {
		return res.send('AddHome controller');

	},
	updateHome: (req, res) => {
		return res.send('UpdateHome controller');

	},
	deleteHome: (req, res) => {
		return res.send('DeleteHome controller');

	}
}

module.exports = homeController;