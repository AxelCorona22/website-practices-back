module.exports = {


  friendlyName: 'Get cat',


  description: '',


  inputs: {
    categoria: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const productos = await Productos.find({ categoria: inputs.categoria });

    return exits.success(productos);

  }
};
