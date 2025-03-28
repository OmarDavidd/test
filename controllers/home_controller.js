const homeService = require('../services/home_service');

const homeController = {
	getHome: async (req, res) => {
		try {
			const resp = await homeService.getDataHome();
			if (!resp.msg) {
				return res.render('home/index', { title: 'Home App', ps: resp.data });
			}
			return res.render('Error404', { title: 'GetHome', error: resp.msg });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	addHome: (req, res) => {
		return res.send('AddHome controller');

	},
	getById: async (req, res) => {
		try {
			const resp = await homeService.getUserById(req.params);
			res.render('home/show', { title: 'Show equipo', ps: resp.data });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}

	},
	updateHome: (req, res) => {
		return res.send('UpdateHome controller');

	},
	deleteHome: (req, res) => {
		return res.send('DeleteHome controller');

	}
}

module.exports = homeController;