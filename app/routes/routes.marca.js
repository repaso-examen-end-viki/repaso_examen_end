import { Router } from "express";
import { crearMarca, eliminarMarca, listarMarca, modificarMarca, mostrarMarca } from "../controllers/controllers.marca.js";

const rutaMarca = Router();

rutaMarca.get("/marca/:id",mostrarMarca);
rutaMarca.get("/marca",listarMarca);
rutaMarca.post("/marca",crearMarca);
rutaMarca.put("/marca",modificarMarca);
rutaMarca.delete("/marca",eliminarMarca);

export default rutaMarca;

