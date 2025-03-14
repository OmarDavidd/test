const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
	console.log(`Servidor: http://localhost:3000`);
});
