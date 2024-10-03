import mongoose, { Schema } from "mongoose";

const esquemaDeProducto = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
    unique: true,
  },

  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 1000000,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
      },
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Arte", "Cuadernos", "Escritura", "Hojas"],
  },
  marca: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 50,
    maxLength: 1000
  },
});

const Producto = mongoose.model("producto", esquemaDeProducto);

export default Producto;
