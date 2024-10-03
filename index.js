import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import './src/database/dbConnection.js'
import ruta from './src/routes/productos.routes.js';

//1-configurar un puerto, debe ser un repo q trabaje 24/7
const app = express();

app.set('puerto', process.env.PORT || 4000)
app.listen(app.get('puerto'),
() =>{
    console.info('estoy escuchando el puerto'+ app.get('puerto'))
}
)

//2- configurar middlewares

app.use(cors()) //permite otras conexiones REMOTAS
app.use(morgan('dev')); // nos da info extra en la terminal
app.use(express.json()); // interpreta los datos en formato json de la solicitud
app.use(express.urlencoded({extended:true}))

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname = path.dirname(__filename)
console.log(__dirname)
console.log(path.join(__dirname, '/public'))

app.use(express.static(path.join(__dirname, '/public')))

//3- configurar las rutas
// http://localhost:4000/prueba
app.use('/api', ruta)