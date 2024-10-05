const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Asegúrate de que la ruta sea correcta
const Empresa = require('./models/Empresa'); // Asegúrate de que la ruta sea correcta
const Sucursal = require('./models/Sucursal'); // Asegúrate de que la ruta sea correcta

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Servir archivos estáticos de la carpeta 'public'

// Sincronizar los modelos con la base de datos
sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.log('Error al sincronizar la base de datos:', err));

// Rutas para Empresas
app.post('/empresa', async (req, res) => {
  try {
    const empresa = await Empresa.create(req.body);
    res.status(201).json(empresa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/empresas', async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para Sucursales
app.post('/sucursal', async (req, res) => {
  try {
    const sucursal = await Sucursal.create(req.body);
    res.status(201).json(sucursal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/sucursales', async (req, res) => {
  try {
    const sucursales = await Sucursal.findAll();
    res.json(sucursales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
