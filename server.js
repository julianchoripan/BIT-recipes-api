import express from "express";
import recipeRouter from "./routes/recipeRoutes.js";
import pruebaMiddleware from "./middlewares/pruebaMiddleware.js";
const app = express();

//middlewares globales
app.use(express.json());

//rutas
app.use(recipeRouter);

//Respuesta a rutas no válida
app.get("*", (req, res) => {
  res.status(404).json("Not found");
});
//servidor en escucha
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
