const express = require("express");
const cors = require("cors");
const UserModel = require("./models/relatos");
const UserModel2 = require("./models/destinos");
const UserModel3 = require("./models/contacto");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(

  "mongodb+srv://christopherper1990:idvLvNUj0y9jNQtO@cluster0.uzc66s6.mongodb.net/blog?retryWrites=true&w=majority",

{ useNewUrlParser: true, useUnifiedTopology: true }

);

const db = mongoose.connection;

db.on(

  "error",

  console.error.bind(console, "No se ha podido conectar con MongoDB:")

);

db.once("open", function () {

  console.log(

    "Conexión correcta a la base de datos BLOG de MongoDB"

  );

});




// destinos
app.get("/destinos", (req, res) => {
  UserModel2.find({})
    .then((destinos) => res.json(destinos))
    .catch((err) => res.json(err));
}); 

// Ruta para realizar la búsqueda
app.get("/buscarDestinos", (req, res) => {
  const searchTerm = req.query.search; // Obtiene el término de búsqueda de la consulta
  UserModel2.find({ $or: [{ pais: searchTerm }, { ciudad: searchTerm }] })
    .then((destinos) => res.json(destinos))
    .catch((err) => res.json(err));
});

// relatos
app.get("/", (req, res) => {
  UserModel.find({})
    .then((relatos) => res.json(relatos))
    .catch((err) => res.json(err));
});
app.post("/createRelatos", (req, res) => {
  UserModel.create(req.body)
    .then((relatos) => res.json(relatos))
    .catch((err) => res.json(err));
});

//contacto 
app.post("/createContacto", (req, res) => {
  UserModel3.create(req.body)
    .then((contacto) => res.json(contacto))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Conectado correctamente");
});
