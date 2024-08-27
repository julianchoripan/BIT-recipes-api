import { body } from "express-validator";

const recipeValidation = {
  create: [
    body("id")
      .notEmpty()
      .withMessage("El campo ID  es obligatorio")
      .isNumeric("El valor ID debe ser númerico"),
    body("title")
      .notEmpty()
      .withMessage("El campo Title es obligatorio")
      .isString("El valor Title debe ser unstring"),
    body("description")
      .notEmpty()
      .withMessage("El campo Description  es obligatorio")
      .isString("El valor Description debe ser un string"),
  ],
};
export default recipeValidation;
