'use strict';

const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hello World')
})

let tareas = {
  1: {
    "nombre": "leer capitulo libro lenguaje C", "tiempo_limite": "28/11/20"
  },
  2: {
    "nombre": "leer capitulo libro lenguaje JAVA", "tiempo_limite": "28/11/20"
  }
}

app.get("/obtener-tarea/:id", function (req, res) {
  let tarea = tareas[req.params.id];
  if(tarea) {
    res.send(tarea);
  }else{
    res.send("Tarea no encontrada");
  }
});

app.get("/obtener-tareas", function (req, res) {
  res.send(tareas);
});

app.post("/agregar-actualizar-tarea", function (req, res) {
  let tarea = req.body;
  let id_tarea = tarea["id"];
  let nombre_tarea = tarea["nombre"];
  let fecha_limite_tarea = tarea["fecha_limite"];
  tareas[id_tarea] = {"nombre": nombre_tarea, "fecha_limite": fecha_limite_tarea}
  res.send("OK");
});

app.delete("/eliminar-tarea", function (req, res) {
  let id_tarea = req.body["id"];
  delete tareas[id_tarea];
  res.send("OK");
});

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("http://localhost:" + port);
});

// app.listen(PORT, function() {
//   console.log("Node server running on http://localhost:8080");
//  });