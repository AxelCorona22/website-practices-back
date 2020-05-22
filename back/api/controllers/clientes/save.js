
module.exports = {
  friendlyName: 'Save',


  description: 'Save clientes.',


  inputs: {
    name: {
      type: 'string',
      required: true,
    },
    user: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },


  exits: {
  },


  fn: async function ( inputs, exits ) {
    console.log('inputs', inputs);
    
    const crear = await Clientes.create( inputs );
    return exits.success( crear );

  },

};

