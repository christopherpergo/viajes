const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  pais: String,
  ciudad: String,
  imagen: String,
  turismo: String,
  informacion:String,
  curiosidad: String,

  
});

const UserModel2 = mongoose.model("destinos", UserSchema);

module.exports = UserModel2;