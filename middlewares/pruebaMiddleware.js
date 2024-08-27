function pruebaMiddleware(req, res, next) {
  console.log("Prueba middleware");
  next();
}
export default pruebaMiddleware;
