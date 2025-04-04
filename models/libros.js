const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database');

class Libro extends Model { }

Libro.init({
	id_libro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	titulo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	autor: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	editorial: {
		type: DataTypes.STRING,
	},
	año_publicacion: {
		type: DataTypes.INTEGER,
	},
	genero: {
		type: DataTypes.STRING,
	},
},
	{
		sequelize,
		modelName: 'Libros',
		tableName: 'libros',
		timestamps: false,
	}
);

module.exports = Libro;