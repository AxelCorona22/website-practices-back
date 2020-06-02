
var uuidv4 = require( 'uuid' ).v4;

module.exports = {

  attributes: {
    uuid:{
      type:'string'
    },
    venta: {
      model: 'ventas'
    },
    producto: {
      model: 'productos'
    },
    cantidad: {
      type:'number',
      required: true
    },
    precio: {
      type:'number',
      required: true
    },
  },
  beforeCreate: async function ( nuevaVenta, next ) {
    //generamos un uuid para el
    nuevaVenta.uuid = uuidv4();
    //todo bien, continuar con la creación de venta
    return next();
  }

};

