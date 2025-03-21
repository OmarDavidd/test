const homeService = {
	getDataHome: () => {
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
		return productos;
	},
	addItem: (req, res) => {
		return 'AddItem service';
	},
}
module.exports = homeService;