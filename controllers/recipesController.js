import database from "../recipes.js";
let recipes = [...database];
import { validationResult } from "express-validator";
//obtener el listado de recetas
function getAllRecipes(req, res) {
  return res.json(recipes);
}

//retornar receta por id
function getRecipeById(req, res) {
  const recipeId = Number(req.params.id);
  for (const recipe of recipes) {
    if (recipe.id === recipeId) {
      return res.json(recipe);
    }
  }
  return res
    .status(404)
    .json(`No se encontró ninguna receta con el id: ${recipeId}`);
}
//crear receta
function createRecipe(req, res) {
  const result = validationResult(req);
  //validar si el error viene vacío
  if (result.isEmpty()) {
    // req.body
    const newRecipe = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      preparation: req.body.preparation,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      nutritionalValues: req.body.nutritionalValues,
    };
    recipes.push(newRecipe);
    return res.status(201).json({
      message: "Se ha creado una nueva receta.",
    });
  }
  return res.json({ errors: result.errors[0] });
}
//editar receta por id

//borrar receta por id
function destroyRecipe(req, res) {
  const recipeId = Number(req.params.id);
  const newArray = [];
  for (const recipe of recipes) {
    if (recipe.id !== recipeId) {
      newArray.push(recipe);
    }
  }
  recipes = newArray;
  return res.json({
    message: `Has eliminado un producto con éxito: ${req.params.id}`,
  });
}

//exportación
export default {
  getAllRecipes,
  getRecipeById,
  destroyRecipe: destroyRecipe,
  createRecipe: createRecipe,
};
