import { Router } from "express";
import { funcionPrueba } from "../controllers/productos.controllers.js";


const ruta = Router();
ruta.route('/prueba').get(funcionPrueba)

export default ruta