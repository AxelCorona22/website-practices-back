module.exports = {


  friendlyName: 'Get',


  description: 'Get productos.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const productos = await Productos.find();

    return exits.success( productos );
  },

};
