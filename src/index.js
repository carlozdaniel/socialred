const express = require('express');

const config = require('./server/config');

const app = config(express());

app.listen(app.get('part'), ()  => {
    console.log('server on port', app.get('port'));
});