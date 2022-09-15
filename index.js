const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const puerto = process.env.PORT || 8080;

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false, }) );

app.use("/", require("./controllers/chat.controller"));

// Iniciar app
app.get("/", (req, res) => res.send(`Bienvenido servidor iniciando`) );

app.listen(puerto, () => {
  console.log(`Escuchando las peticios de usuarios en el puerto ${ puerto }`);
});
