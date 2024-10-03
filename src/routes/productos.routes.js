import { Router } from "express";
import { crearProducto, funcionPrueba } from "../controllers/productos.controllers.js";


const ruta = Router();
ruta.route('/prueba').get(funcionPrueba)
ruta.route('/productos').post(crearProducto)

export default ruta