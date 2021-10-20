const express = require("express");
const cors = require("cors");
const informacion = require("./informacion");

const app = express();

app.use(cors());

app.use(express.json());

//Metodos GET

app.get("/", (req, res) => {
  res.send("<h1>Hola, te saluda Jacob</h1>");
});
app.get("/informacion", (req, res) => {
  res.json(informacion);
});

app.get("/informacion/:id", (req, res) => {
  const id = Number(req.params.id);
  const resultado_peticion = informacion.find((info) => info.id === id);
  if (resultado_peticion) {
    res.json(resultado_peticion);
  } else {
    res.status(404).end();
  }
});

//Metodo DELETE

app.delete("/informacion/:id", (req, res) => {
  const id = Number(req.params.id);
  informacion = informacion.filter((info) => info.id !== id);
  res.status(400).json({ error: "falta informacion requerida" });
});

//Metodo POST

app.post("/informacion", (req, res) => {
  const infor = req.body;
  if (!infor || !infor.content) {
    return res.status(400).end();
  }
  const ID = informacion.map((info) => info.id);
  const maxi_ID = Math.max(...id);
  const newinfo = {
    id: maxi_ID + 1,
    content: infor.content,
  };
  res.status(201).json(infor);
});

app.use((req, res) => {
  res.status(404).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("el servidor se esta ejecutando en el puerto:" + PORT);
});
