const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empresa = sequelize.define('Empresa', {
  idempresa: {
    type: DataTypes.STRING(5),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  direccionfacturacion: {
    type: DataTypes.STRING(200),
  },
  representantelegal: {
    type: DataTypes.STRING(100),
  },
  telefono: {
    type: DataTypes.STRING(50),
  },
  correoelectronico: {
    type: DataTypes.STRING(100),
  },
  codigopostal: {
    type: DataTypes.STRING(20),
  },
  estado: {
    type: DataTypes.STRING(3),
    validate: {
      isIn: [['A', 'I', 'PEN', 'DES', 'CAN']],
    },
  },
  principal: {
    type: DataTypes.STRING(1),
    validate: {
      isIn: [['S', 'N']],
    },
  },
  adiciono: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  fechaadicion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'gen_empresas',
});

module.exports = Empresa;
