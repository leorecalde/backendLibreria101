import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  funcionPrueba,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";

const ruta = Router();
ruta.route("/prueba").get(funcionPrueba);
ruta.route("/productos").post(crearProducto).get(listarProductos);
ruta.route("/productos/:id").put(editarProducto).delete(borrarProducto).get(obtenerProducto);

export default ruta;
