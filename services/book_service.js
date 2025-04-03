const Equipos = require('../models/equipos');

const homeService = {
	getDataHome: async () => {
		try {
			const data = await Equipos.findAll();
			return { msg: null, data };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	},
	getUserById: async (id) => {

		try {

			const equipos = await Equipos.findOne({ where: { id_equipo: id } });
			console.log('equipos', equipos, id);


			return { msg: null, data: equipos };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	},
	addItem: (req, res) => {
		return 'AddItem service';
	},
}
module.exports = homeService;