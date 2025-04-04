const Libros = require('../models/libros');

const librosService = {
	getData: async () => {
		try {
			const data = await Libros.findAll();

			return { msg: null, data };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	},
	getById: async (id) => {
		try {
			const libro = await Libros.findOne({ where: { id_libro: id } });
			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	},
	updateBook: async (id, data) => {
		try {
			const libro = await Libros.findByPk(id);

			await libro.update(data);
			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	},
	addBook: async (data) => {
		try {
			const libro = await Libros.create(data);

			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	},
	deleteBook: async (id) => {
		try {
			console.log('data', id);

			const libro = await Libros.findByPk(id);
			libro.destroy();
			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: [] };
		}
	}
}
module.exports = librosService;