const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
});

sequelize.authenticate()
	.then(() => {
		console.log('Conectado.');
	})
	.catch(err => {
		console.error('Error:', err);
	});

module.exports = sequelize;