module.exports = {


  friendlyName: 'Save',


  description: 'Save productos.',


  inputs: {
    id: {
      type: 'number',
    },
    nombre: {
      type: 'string',
      required: true
    },
    categoria: {
      type: 'number',
    },
    precio: {
      type: 'number',
      required: true
    },
    descuento: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var producto;

    if(inputs.id){
      producto = await Productos.update({id: inputs.id}).set(inputs).fetch();
    }else{
      producto = await Productos.create(inputs).fetch();
    }
    // All done.
    return exits.success(producto);
  }
};
