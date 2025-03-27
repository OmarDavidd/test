const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ChampionsLeague', 'root', '123456789', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate()
	.then(() => {
		console.log('Conectado.');
	})
	.catch(err => {
		console.error('Error:', err);
	});

module.exports = sequelize;