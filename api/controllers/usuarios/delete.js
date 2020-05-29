module.exports = {


  friendlyName: 'Delete',


  description: 'Delete usuarios.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const borrarUsuario = await Usuarios.destroyOne( { id: inputs.id } );
    // All done.
    return exits.success( borrarUsuario );

  }


};
