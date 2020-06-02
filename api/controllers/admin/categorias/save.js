module.exports = {


  friendlyName: 'Save',


  description: 'Save categorias.',


  inputs: {
    id: {
      type: 'number',
    },
    nombre:{
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var categoria;

    if(inputs.id){
      categoria = await Categorias.update({id: inputs.id}).set(inputs).fetch();
    }else{
      categoria = await Categorias.create(inputs).fetch();
    }
    // All done.
    return exits.success(categoria);
  }


};
