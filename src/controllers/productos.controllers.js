import Producto from "../database/model/producto.js"



export const funcionPrueba = (req, res)=>{
    console.log('alguien hizo una solicitud')
    res.send('hola mundo')
}


export const crearProducto =  async (req, res)=>{
    try{
        //extraer el producto del body de la solicitud del req
        console.log(req)
        console.log(req.body)
        //validar los datos del body
        //crear in objeto con el modelo del producto
        const productoNuevo = new Producto(req.body);
        //guardar el ob en la bd
        await productoNuevo.save()
        //enviar la respuesta q se crep el producto
        res.status(201).json({mensaje:'el producto fue creado correctamente'})

    }catch (error){
        console.error(error)
        res.status(500).json({mensaje:'ocurrio un error, no te pude crear el producto'})
    }
}