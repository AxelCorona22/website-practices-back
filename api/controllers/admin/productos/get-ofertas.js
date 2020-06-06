module.exports = {


  friendlyName: 'Get ofertas',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const productos = await Productos.find({descuento:{">":0}});

    return exits.success(productos);


  }


};
