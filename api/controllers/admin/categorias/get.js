module.exports = {


  friendlyName: 'Get',


  description: 'Get categorias.',


  inputs: {},
  exits: {

  },


  fn: async function (inputs, exits) {
    const categorias = await Categorias.find();
    // All done.
    return exits.success(categorias);
  }


};
