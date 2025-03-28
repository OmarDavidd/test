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

			const equipos = await Equipos.findAll({ where: { id_equipo: id } });


			return { msg: null, data: equipos[0] };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	},
	addItem: (req, res) => {
		return 'AddItem service';
	},
}
module.exports = homeService;