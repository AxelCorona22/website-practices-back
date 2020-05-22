module.exports = {


  friendlyName: 'Delete',


  description: 'Delete clientes.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const borrarCliente = await Clientes.destroy( inputs );
    // All done.
    return exits.success( borrarCliente );

  }


};
