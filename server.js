import express from "express";
import recipeRouter from "./routes/recipeRoutes.js";
import pruebaMiddleware from "./middlewares/pruebaMiddleware.js";
const app = express();

//middlewares globales
app.use(express.json());

//rutas
app.use(recipeRouter);

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
