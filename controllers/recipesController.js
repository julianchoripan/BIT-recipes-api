import recipes from "../recipes.js";

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

//exportación
export default {
  getAllRecipes,
  getRecipeById,
};
