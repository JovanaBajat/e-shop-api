import mongoose from 'mongoose';

const newItem = new mongoose.Schema({
  name : {type : String, required : true},
  price : {type : Number, required : true},
  description : String
},
{
  versionKey : false
});

module.exports = mongoose.model("Item", newItem, "items");
