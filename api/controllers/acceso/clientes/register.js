
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

    inputs.clearPassword = inputs.password; //respaldar el pass original

    inputs.email = inputs.email.toLowerCase(); //nos aseguramos que esta en minusculas

    //hashear el password
    inputs.password = await sails.helpers.passwords.hashPassword( inputs.password );

    const cliente = await Clientes.create( inputs ).fetch();

    let jwt = jwtService.issue({ cliente });

    return exits.success( {cliente, jwt} );

  },

};

