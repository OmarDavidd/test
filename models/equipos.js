const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database');

class Equipos extends Model { }

Equipos.init(
	{
		id_equipo: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
		},
		pais: {
			type: DataTypes.STRING,
		},
		ciudad: {
			type: DataTypes.STRING,
		},
		fundacion: {
			type: DataTypes.INTEGER,
		},
		champions_ganados: {
			type: DataTypes.INTEGER,
		},

	},
	{
		sequelize,
		modelName: 'Equipos',
		tableName: 'equipos',
		timestamps: false
	}
);

module.exports = Equipos;