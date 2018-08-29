'use strict'

let dbName = "polydb";
let dbHost = "mongodb://user:polyhome@123.57.139.200:57017/";
//let dbHost = "mongodb://localhost:27017/";
let mongoose = require("mongoose");

exports.connect = function (request, response) {
  // useMongoClient防止报错
  mongoose.connect(dbHost + dbName, {
    useMongoClient: true
  });
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('connet success!');
  });
}
