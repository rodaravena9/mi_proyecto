const express = require("express");
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Datos simulados
let tasks = [
  { id: 1, name: "Tarea 1" },
  { id: 2, name: "Tarea 2" },
];

// Ruta para obtener todas las tareas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Ruta para obtener una tarea por ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
