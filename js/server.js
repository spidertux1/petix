const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'd1a52002',
  database: 'carro'
});

app.use(bodyParser.json());

app.post('/agregarAlCarrito', (req, res) => {
  const { nombre, precio } = req.body;

  // Insertar el producto en la base de datos
  db.query('INSERT INTO carrito (nombre, precio) VALUES (?, ?)', [nombre, precio], (err, result) => {
    if (err) throw err;
    console.log('Producto agregado al carrito:', result);
    res.sendStatus(200);
  });
});

app.get('/obtenerCarrito', (req, res) => {
  // Obtener todos los productos del carrito
  db.query('SELECT * FROM carrito', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
