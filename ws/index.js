const express = require('express');
const app = express();
const morgan = require('morgan');
require ('./database'),

//MIDDLEWARES
app.use(morgan('dev'));

// VARIABLES
app.set('port', 8000);

app.listen(app.get('port'), function () {
  console.log('WS escutando porta ' + app.get('port'));
});