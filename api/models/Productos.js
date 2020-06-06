/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var uuidv4 = require( 'uuid' ).v4;

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    uuid:{
      type:'string'
    },
    categoria: {
      model: 'categorias'
    },
    precio: {
      type:'number',
      required: true
    },
    descuento: {
      type:'number',
    }


  },
  beforeCreate: async function ( nuevoProducto, next ) {
    //generamos un uuid para el
    nuevoProducto.uuid = uuidv4();
    //todo bien, continuar con la creación de usuario
    return next();
  }

};

