import recipes from "./recipes.js";
import express from "express";

const app = express();

//middlewares globales

//rutas
//retornar listado completo de recetas
app.get("/api/recipes/all", (req, res) => {
  return res.json(recipes);
});

//retornar una receta por ID

//crear una receta

//editar una receta por ID

//borrar una receta por ID

//servidor en escucha
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
