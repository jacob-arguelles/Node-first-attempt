const mongoose = require("mongoose");
const password = "12LW5gqEGLZLvVqA";
const { model, Schema } = mongoose;
const connectionString = process.env.MONGO_DB_URI;

//conexion a mongodb
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Se ha conectado a la base de datos con exito");
  })
  .catch((err) => {
    console.error(err);
    console.log("Ha fallado la conexion a la base de datos");
  });
