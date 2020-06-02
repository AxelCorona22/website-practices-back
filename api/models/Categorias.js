/**
 * Categorias.js
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
    productos:{ //campo virtual, que llama a todos los productos con la categoria actual, esto, a través del campo categoria
      collection: 'productos',
      via:'categoria'
    }
  },
  beforeCreate: async function ( nuevaCategoria, next ) {
    //generamos un uuid para la
    nuevaCategoria.uuid = uuidv4();
    //todo bien, continuar con la creación de categoria
    return next();
  }
};

