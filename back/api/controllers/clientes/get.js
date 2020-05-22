module.exports = {

  friendlyName: 'get',


  description: 'Get clientes.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const clientes = await Clientes.find();
    // pasar a locals
    return exits.success( clientes );
  },
};
