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

    const cliente = await Clientes.findOne({ email: inputs.email.toLowerCase() });

    if(!cliente){
      console.log('usuario no encontrado');
      return exits.success({error:true});
    }

    //validar el pass hasheado

    try {
      await sails.helpers.passwords.checkPassword(inputs.password, cliente.password);
    } catch (error) {
      console.log('Error en el password:', error);
      return exits.success({error:true});
    }

    //el cliente existe, y su password, es valido

    //generamos un token jwt
    let jwt = jwtService.issue({ cliente });

    //entregamos al front
    return exits.success({ jwt, cliente });

  }


};
