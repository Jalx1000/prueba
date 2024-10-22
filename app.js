import express from "express";

const app = express();
const PORT = process.env.PORT || 3000; // Puedes cambiar el puerto si es necesario

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi aplicación Express!");
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
