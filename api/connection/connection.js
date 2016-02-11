/**
 * Created by Jonathan on 10/02/2016.
 */
var connstr = 'mongodb://127.0.0.1/inlife';
var mongoose = require('mongoose').connect(connstr);
var database = mongoose.connection;

database.on('error', console.error.bind(console, 'Erro ao conectar no banco'));


exports.strconn = connstr;
exports.db = database;
exports.mong = mongoose;