const mongose = require('mongoose');

const { database } = require('./keys')
mongose.connect(database.URI)