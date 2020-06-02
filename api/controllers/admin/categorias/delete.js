module.exports = {


  friendlyName: 'Delete',


  description: 'Delete categorias.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const borrarCategoria = await Categorias.destroyOne({id: inputs.id});
    // All done.
    return exits.success(borrarCategoria);


  }


};
