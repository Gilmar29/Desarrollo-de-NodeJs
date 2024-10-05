const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Empresa = require('./Empresa');

const Sucursal = sequelize.define('Sucursal', {
  idsucursal: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  idempresa: {
    type: DataTypes.STRING(5),
    references: {
      model: Empresa,
      key: 'idEmpresa',
    },
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(100),
  },
  telefono: {
    type: DataTypes.STRING(50),
  },
  encargado: {
    type: DataTypes.STRING(50),
  },
  estado: {
    type: DataTypes.STRING(3),
    validate: {
      isIn: [['A', 'I', 'PEN', 'DES', 'CAN']],
    },
  },
}, {
  timestamps: false,
  tableName: 'inv_sucursales',
});

Sucursal.belongsTo(Empresa, { foreignKey: 'idempresa' });

module.exports = Sucursal;
