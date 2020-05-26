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

    /*
      var req=this.req;

      req.cliente = {} //el cliente que metimos en la policy

    */
    const borrarCliente = await Clientes.destroy( inputs ).fetch();
    // All done.
    return exits.success( borrarCliente );

  }


};
