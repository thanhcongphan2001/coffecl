const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
username :{type:String },
pass :{type:String },
slug: { type: String },
createat: { type: Date, default: Date.now },
updateat: { type: Date, default: Date.now },

  });
  module.exports =mongoose.model('admin', Course);/// colection