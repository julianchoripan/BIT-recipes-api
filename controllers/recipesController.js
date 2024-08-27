import database from "../recipes.js";
let recipes = [...database];

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
  destroyRecipe,
};
