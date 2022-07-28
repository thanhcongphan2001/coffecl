const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosedelete = require('mongoose-delete');
const Course = new Schema({
name :{type:String },
age :{type:Number },
slug: { type: String },
price:{type:String},
image:{type :String},
deleted:{type:Boolean, default:'false'},
description:{type :String},
deleteAt:{},
createat: { type: Date, default: Date.now },
updateat: { type: Date, default: Date.now },
  }
  
  );

  Course.plugin(mongoosedelete ,{ overrideMethods: 'all' , deletedAt : true })
  module.exports =mongoose.model('detail', Course);/// colection