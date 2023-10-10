const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
 
  relato: String,
  lugar: String,
  
});

const UserModel = mongoose.model("relatos", UserSchema);

module.exports = UserModel;