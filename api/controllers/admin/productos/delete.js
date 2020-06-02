module.exports = {


  friendlyName: 'Delete',


  description: 'Delete productos.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const borrarProducto = await Productos.destroyOne( {id: inputs.id} );
    // All done.
    return exits.success(borrarProducto);

  }


};
