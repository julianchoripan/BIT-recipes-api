import controllers from "./controllers/recipesController.js";
import express from "express";

const app = express();

//middlewares globales

//rutas
//retornar listado completo de recetas
app.get("/api/recipes/all", controllers.getAllRecipes);

//retornar una receta por ID
app.get("/api/recipes/:id", controllers.getRecipeById);

//crear una receta

//editar una receta por ID

//borrar una receta por ID 
app.delete("/api/recipes/:id", controllers.DestroyRecipe);
//servidor en escucha 
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
