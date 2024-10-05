const { Sequelize } = require('sequelize');

// Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('Empresasdb', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,  // Este es el puerto predeterminado para PostgreSQL
});

module.exports = sequelize;
