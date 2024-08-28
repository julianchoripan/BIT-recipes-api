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
function editRecipe(req, res) {
  const recipeId = Number(req.params.id);

  for (const recipe of recipes) {
    if (recipe.id === recipeId) {
      recipe.title = req.body.title || recipe.title;
      recipe.description = req.body.description || recipe.description;
      recipe.preparation.ingredients =
        req.body.preparation.ingredients || recipe.preparation.ingredients;
      recipe.preparation.cooking =
        req.body.preparation.cooking || recipe.preparation.cooking;
      recipe.preparation.total =
        req.body.preparation.total || recipe.preparation.total;
      recipe.instructions = req.body.instructions || recipe.instructions;
      recipe.ingredients = req.body.ingredients || recipe.ingredients;
      recipe.nutritionalValues.calories =
        req.body.nutritionalValues.calories ||
        recipe.nutritionalValues.calories;
      recipe.nutritionalValues.carbohydrates =
        req.body.nutritionalValues.carbohydrates ||
        recipe.nutritionalValues.carbohydrates;
      recipe.nutritionalValues.protein =
        req.body.nutritionalValues.protein || recipe.nutritionalValues.protein;
      recipe.nutritionalValues.fat =
        req.body.nutritionalValues.fat || recipe.nutritionalValues.fat;
      recipe.nutritionalValues.fiber =
        req.body.nutritionalValues.fiber || recipe.nutritionalValues.fiber;

      return res.json({
        message: `Se ha modificado el producto: ${recipeId}`,
      });
    }
  }
  return res
    .status(404)
    .json({ message: `No se encontró ninguna receta con el id: ${recipeId}` });
}

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
    message: `Has eliminado el producto: ${req.params.id} con éxito: `,
  });
}

//exportación
export default {
  getAllRecipes: getAllRecipes,
  getRecipeById: getRecipeById,
  destroyRecipe: destroyRecipe,
  createRecipe: createRecipe,
  editRecipe: editRecipe,
};
