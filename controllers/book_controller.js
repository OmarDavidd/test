const bookSevice = require('../services/book_service');

const bookController = {
	getAll: async (req, res) => {
		try {
			const resp = await bookSevice.getData();
			if (!resp.msg) {
				return res.send(resp.data);
			}
			return res.render('Error404', { title: 'GetHome', error: resp.msg });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getById: async (req, res) => {
		try {
			const resp = await bookSevice.getById(req.params.id);
			return res.send(resp.data);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}

	},
	updateBook: async (req, res) => {
		try {
			const resp = await bookSevice.updateBook(req.params.id, req.body);
			return res.send(resp.data);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}

	},
	addBook: async (req, res) => {
		try {

			const resp = await bookSevice.addBook(req.body);

			return res.send(resp.data);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}

	},
	deleteBook: async (req, res) => {
		try {
			const resp = await bookSevice.deleteBook(req.params.id);
			return res.send(resp.data);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}

	}
}

module.exports = bookController;