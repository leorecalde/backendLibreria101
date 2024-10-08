import Producto from "../database/model/producto.js";

export const funcionPrueba = (req, res) => {
  console.log("alguien hizo una solicitud");
  res.send("hola mundo");
};

export const crearProducto = async (req, res) => {
  try {
    //extraer el producto del body de la solicitud del req
    console.log(req);
    console.log(req.body);
    //validar los datos del body
    //crear in objeto con el modelo del producto
    const productoNuevo = new Producto(req.body);
    //guardar el ob en la bd
    await productoNuevo.save();
    //enviar la respuesta q se crep el producto
    res.status(201).json({ mensaje: "el producto fue creado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude crear el producto" });
  }
};

export const listarProductos = async (req, res) => {
  try {
    //pedir a la bd la coleccion de productos
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude crear el producto" });
  }
};

export const editarProducto = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params.id);
    // validar los datos del body
    //buscar si el producto existe
    const productoBuscado = await Producto.findById(req.params.id);
    console.log(productoBuscado);
    //en caso de q el producto no exista, responder con un 404
    if (!productoBuscado) {
      return res
        .status(404)
        .json({ mensaje: "el producto solicitado no existe" });
    }
    //si lo econtre al producto, lo edito
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    //envio respuesta al front
    res.status(200).json({ mensaje: "el producto fue editado con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude editar el producto" });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    //verificar si el id es valido
    const productoBuscaado = await Producto.findById(req.params.id);
    //si el id no ex msj de error
    if (!productoBuscaado) {
      return res
        .status(404)
        .json({ mensaje: "el producto solicitado no existe" });
    }
    //si ex borrar el producto
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "el producto fue borrado con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude borrar el producto" });
  }
};

export const obtenerProducto = async (req, res) =>{
  try{
    //verificar si el producto ex
    const productoBuscaado = await Producto.findById(req.params.id);
    //si el id no ex msj de error
    if (!productoBuscaado) {
      return res
        .status(404)
        .json({ mensaje: "el producto solicitado no existe" });
    }
    //si ex, debo devolver el producto
    res.status(200).json(productoBuscaado);

  }catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error, no te pude borrar el producto" });
  }
}