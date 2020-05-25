module.exports = {


  friendlyName: 'Login',


  description: 'Login something.',


  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    sails.log('intento de login:', inputs);

    const clienteExistente = await Clientes.findOne({password: inputs.password, email:inputs.email});

    if(clienteExistente){
      console.log('ingresando');
      return exits.success(clienteExistente);
    }else{
      console.log('usuario no encontrado');
      return exits.success({});
    }
    // All done.

  }


};
