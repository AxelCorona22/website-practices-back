/**
 * Clientes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var uuidv4 = require( 'uuid' ).v4;
module.exports = {

  attributes: {
    uuid:{
      type:'string'
    },
    name: {
      type: 'string',
      required: true
    },
    user: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    clearPassword:{
      type:'string',
      required:false
    }

  },
  beforeCreate: async function ( newCliente, next ) {
    //generamos un uuid para el
    newCliente.uuid = uuidv4();

    //verificamos que este en minusculas
    newCliente.email = newCliente.email.toLowerCase();

    //verificamos que no exista
    var found = await Clientes.findOne( { where: { email: newCliente.email } } );

    //si está duplicado, generar el error
    if ( found ) {
      return next( 'Cliente Duplicado' );
    }

    //todo bien, continuar con la creación de cliente
    return next();
  }

};

