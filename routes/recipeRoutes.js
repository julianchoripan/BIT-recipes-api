import recipeValidation from "../middlewares/recipeValidation.js";
import express from "express";
import recipesController from "../controllers/recipesController.js";

const router = express.Router();

//retornar listado completo de recetas
router.get("/api/recipes", recipesController.getAllRecipes);
//retornar una receta por ID
router.get("/api/recipes/:id", recipesController.getRecipeById);

//crear una receta
router.post(
  "/api/recipes",
  recipeValidation.create,
  recipesController.createRecipe
);
//editar una receta por ID

//borrar una receta por ID
router.delete("/api/recipes/:id", recipesController.destroyRecipe);

export default router;
