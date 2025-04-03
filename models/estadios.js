const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database');

class Estadio extends Model { }

Estadio.init(
	{
		id_estadio: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ciudad: {
			type: DataTypes.STRING,
		},
		capacidad: {
			type: DataTypes.INTEGER,
		},
		año_construccion: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		modelName: 'Estadio',
		tableName: 'estadios',
		timestamps: false,
	}
);

module.exports = Estadio;