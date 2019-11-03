const express = require('express');

const config = require('./server/config');

require('./database');//database

const app = config(express());//empesando el servidor

app.listen(app.get('port'), ()  => {
    console.log('server on port', app.get('port'));
});