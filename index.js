import express from 'express'

//1-configurar un puerto, debe ser un repo q trabaje 24/7
const app = express();

app.set('puerto', process.env.PORT || 4000)
app.listen(app.get('puerto')),
() =>{
    console.info('estoy escuchando el puerto'+ app.get('puerto'))
}


//2- configurar middlewares

//3- configurar las rutas