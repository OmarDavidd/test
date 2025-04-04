const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');
const express_layouts = require('express-ejs-layouts');
const sequelize = require('./db/database');
const Equipos = require('./models/equipos');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/layout');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express_layouts);
app.use('/', routes);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


sequelize.sync()
	.then(async () => {
		console.log('Tablas sincronizadas');
	})
	.catch(err => {
		console.error('Error de sincronización:', err);
	});

app.listen(3000, () => {
	console.log(`Servidor: http://localhost:3000`);
});
