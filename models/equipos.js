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
			allowNull: false
		},
		pais: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ciudad: {
			type: DataTypes.STRING,
			allowNull: false
		},
		fundacion: {
			type: DataTypes.DATE,
			allowNull: false
		},
		champions_ganados: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	},
	{
		sequelize,
		modelName: 'Equipos',
		tableName: 'equipos',
		timestamps: false
	}
);