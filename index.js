const contenedor = require('./clase');
const productos = new contenedor.Contenedor('productos.txt')


const express = require('express');
const app = express();
const puerto = 8080;

const allProducts = async(req, res) =>{
  const arrProduct = await productos.getAll()
  res.send(arrProduct)
}
const randomProducts = async(req, res) =>{
  const randomProduct = await productos.getRandom()
  res.send(randomProduct)
}

app.get('/productos', allProducts)

app.get('/productoRandom', randomProducts)

app.listen(puerto, () =>{
  console.log(`Servidor escuchando puerto: ${puerto}`)
})
