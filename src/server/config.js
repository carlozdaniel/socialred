const path = require('path');
const exphbs = require('express-handlebars');

const morgan = require('morgan');
const multer = require('multer');
const express = require('express');

const routes = require('../routes/index');

module.exports = app => {
    //settings
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'patials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }));
    app.set('view engine', '.hbs');
   //middlewares
   app.use(morgan('dev')),
   app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
   app.use(express.urlencoded({extended: false}));
   app.use(express.json());

   //routes
    routes(app);
   //errohandlers
   
    return app;
}