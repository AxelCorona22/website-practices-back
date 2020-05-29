module.exports = {


  friendlyName: 'Get',


  description: 'Get usuarios.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const usuarios = await Usuarios.find();
    // pasar a locals
    return exits.success( usuarios );

  }


};
