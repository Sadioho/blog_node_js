const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect db
db.connect();

// file static
app.use(express.static(path.join(__dirname, 'public')));

//middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

//template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//morgan
app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
