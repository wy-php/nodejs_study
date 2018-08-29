'use strict';

var MongoClient = require('mongodb').MongoClient;
var MONGO_URL = 'mongodb://user:polyhome@123.57.139.200:57017/polydb';
// const MONGO_URL = 'mongodb://localhost:27017/polydb';
var mogo_db;

MongoClient.connect(MONGO_URL, function(err, db){
    if (err){
      console.log('Database connect Error');
      return
    }
    console.log('Database connect Success');
    mogo_db = db;
});

exports.getDB = function(){
    return mogo_db
};
