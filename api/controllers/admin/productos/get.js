module.exports = {


  friendlyName: 'Get',


  description: 'Get productos.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const productos = await Productos.find();
    // All done.
    return exits.success(productos);

  }


};
